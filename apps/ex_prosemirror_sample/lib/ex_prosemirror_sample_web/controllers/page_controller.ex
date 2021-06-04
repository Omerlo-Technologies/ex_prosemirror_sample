defmodule ExProsemirrorSampleWeb.PageController do
  use ExProsemirrorSampleWeb, :controller

  def index(conn, _params) do
    changeset = ExProsemirrorSample.Article.changeset(%ExProsemirrorSample.Article{})
    render(conn, "index.html", changeset: changeset)
  end

  def create(conn, %{"article" => article}) do
    changeset =
      ExProsemirrorSample.Article.changeset(%ExProsemirrorSample.Article{}, article)
      |> IO.inspect()

    render(conn, "index.html", changeset: changeset)
  end
end
