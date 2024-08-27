export default function VideoEmbed({ url }) {
  return (
    <div className="flex justify-center">
      <iframe
        width="80%"
        height="600px"
        src={url}
        title="YouTube video player"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerpolicy="strict-origin-when-cross-origin"
        className="rounded-lg h-[300px] md:h-[600px]"
        allowfullscreen
      ></iframe>
    </div>
  );
}
