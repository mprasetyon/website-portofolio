export default function ProjectsCard(props) {
  return (
    <div
      data-aos="fade-up"
      data-aos-duration="500"
      data-aos-offset="100"
      className="w-full md:w-2/6 bg-white rounded-md py-4 px-4"
    >
      <a href={props.link}>
        <img src={props.img} className="mx-auto" alt={props.name}></img>
        <div className="mt-2">
          <h1 className="font-bold md:text-xl">{props.name}</h1>
          <p className="font-normal md:text-lg">{props.issued}</p>
          <p className="font-light text-gray-400">{props.desc}</p>
        </div>
      </a>
    </div>
  );
}
