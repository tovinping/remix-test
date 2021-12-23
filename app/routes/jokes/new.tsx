import { db } from "~/utils/db.server";
import type { ActionFunction } from "remix";

export const action: ActionFunction = async ({ request }) => {
  const form = await request.formData();
  const title = form.get("title");
  const content = form.get("content");
  console.log("TANG====", title, content);
  const jokes = new db({ title, content });
  jokes
    .save()
    .then((r) => {
      console.log("rrrr", r);
    })
    .catch((e) => {
      console.log("eeee", e);
    });
  return null;
};
export default function NewJokeRoute() {
  return (
    <div>
      <p>Add your own hilarious joke</p>
      <form method="post">
        <div>
          <label>
            Name: <input type="text" name="title" />
          </label>
        </div>
        <div>
          <label>
            Content: <textarea name="content" />
          </label>
        </div>
        <div>
          <button type="submit" className="button">
            Add
          </button>
        </div>
      </form>
    </div>
  );
}
