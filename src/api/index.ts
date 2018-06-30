const key = "IMIMBzWbHV1vqhA08MGBLwEp9u5L86eM";

const api = `https://api.giphy.com/v1/gifs/trending?api_key=${key}&`;

export const getImageGallery = async ({
  limit = 20,
  offset = required()
}: {
  limit: number;
  offset: number;
}) => {
  const url = `${api}limit=${limit}&offset=${offset}`;
  const data = await fetch(url).then(res => {
    if (res.ok) {
      return res.json();
    }

    throw new Error(res.statusText);
  });

  return data;
};

function required() {
  throw new Error("Missing offset parameter");
}
