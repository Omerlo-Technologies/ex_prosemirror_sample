defmodule ExProsemirrorSampleWeb.PageController do
  use ExProsemirrorSampleWeb, :controller

  def index(conn, _params) do
    render(conn, "index.html")
  end
end
