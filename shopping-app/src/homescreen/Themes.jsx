const themeImgs = [
  "https://cdn.shopify.com/s/files/1/1685/0491/collections/life_1296x.jpg?v=1553723059",
  "https://cdn.shopify.com/s/files/1/1685/0491/collections/Annotation_2020-07-06_012023_720x.jpg?v=1611760626",
  "https://cdn.shopify.com/s/files/1/1685/0491/collections/GymPage_1080x.jpg?v=1553725522",
];

export function ThemesContent() {
  return (
    <div>
      <h1>SHOP BY THEMES</h1>
      <div className="grid grid-cols-3 gap-3 mb-10">
        {themeImgs.map((img, id) => (
          <div className={`themeImg`} style={{backgroundImage:`url(${img})`}}></div>
        ))}
      </div>
    </div>
  );
}
