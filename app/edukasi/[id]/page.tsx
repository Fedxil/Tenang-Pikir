import { notFound } from "next/navigation";
import { articles } from "@/lib/articles";
import ArticleClient from "./ArticleClient";

type Props = {
  params: Promise<{
    id: string;
  }>;
};

export async function generateStaticParams() {
  return articles.map((article) => ({
    id: article.id,
  }));
}

export default async function Page({ params }: Props) {

  const { id } = await params;

  const article = articles.find((a) => a.id === id);

  if (!article) {
    notFound();
  }

  return <ArticleClient article={article} />;
}