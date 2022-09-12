export function CircleIcon({styling,radius}) {
  return (
    <svg height="18" width="18">
      <circle
        className={`${styling} hover:cursor-pointer`}
        cx="10"
        cy="10"
        r={`${radius}`}
        stroke="black"
        stroke-width="0.2"
        fill="#ebdada"
      />
    </svg>
  );
}
