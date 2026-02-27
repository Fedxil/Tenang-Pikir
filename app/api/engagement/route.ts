import { NextResponse } from "next/server";
import { prisma } from "@/prisma";

// ID unik untuk halaman engagement kita, sesuai dengan default di schema.prisma
const PAGE_ID = "engagement_page";

export async function GET() {
  try {
    let page = await prisma.page.findUnique({
      where: { id: PAGE_ID },
      include: {
        comments: {
          orderBy: {
            createdAt: "desc",
          },
        },
      },
    });

    // Jika halaman belum ada di DB, buat entri baru dengan data awal.
    if (!page) {
      page = await prisma.page.create({
        data: {
          id: PAGE_ID,
          likes: 10, // Nilai awal
          comments: {
            create: [
              {
                name: "Rina S.",
                text: "Sangat membantu! Saya menjadi mendapatkan informasi beharga",
                initial: "R",
              },
              {
                name: "Andi W.",
                text: "Simulator ini menarik, edukasi yang sangat baik",
                initial: "A",
              },
            ],
          },
        },
        include: { comments: true },
      });
    }

    return NextResponse.json({
      likes: page.likes,
      comments: page.comments,
    });
  } catch (error) {
    console.error("GET Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}

export async function POST(request: Request) {
  try {
    const body = await request.json();

    if (body.type === "like" || body.type === "unlike") {
      const updatedPage = await prisma.page.update({
        where: { id: PAGE_ID },
        data: {
          likes: body.type === "like" ? { increment: 1 } : { decrement: 1 },
        },
      });
      return NextResponse.json({ likes: updatedPage.likes });
    }

    if (body.type === "comment") {
      const { name, text } = body;

      if (!text) {
        return NextResponse.json(
          { error: "Comment text is required" },
          { status: 400 },
        );
      }

      // Buat komentar baru dan langsung ambil semua data terbaru
      const updatedPage = await prisma.page.update({
        where: { id: PAGE_ID },
        data: {
          comments: {
            create: {
              name: name || "Anonim",
              text,
              initial: (name || "A").charAt(0).toUpperCase(),
            },
          },
        },
        include: {
          comments: {
            orderBy: {
              createdAt: "desc",
            },
          },
        },
      });

      return NextResponse.json({
        likes: updatedPage.likes,
        comments: updatedPage.comments,
      });
    }

    return NextResponse.json({ error: "Invalid type" }, { status: 400 });
  } catch (error) {
    console.error("POST Error:", error);
    return NextResponse.json(
      { error: "Internal Server Error" },
      { status: 500 },
    );
  }
}
