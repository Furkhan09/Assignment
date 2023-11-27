import Card from "./Card";
// import boat1 from "../assets/boat1.png";
// import boat2 from "../assets/boat2.png";
// import boat3 from "../assets/boat3.png";
// import boat4 from "../assets/boat4.png";

const Cardgrid = () => {
  const cardsData = [
    {
      id: 1,
      title: "Boat Airdopes 71",
      description:
        "Wireless Earbuds with upto 60 Hours Playback, 13mm Drivers, IWP Technology, 650mAh Charging Case ",
      buttonText: "Add to Cart",
    },
    {
      id: 2,
      title: "Boat Lunar Peak",
      description:
        "Beat your competitors and achieve retail growth with contextual target insights and timely sales interventions",
      buttonText: "Explore",
    },
    {
      id: 3,
      title: "Boat stone 750",
      description:
        "Portable Bluetooth Speaker with 12W RMS Stereo Sound, 12 Hours Playback, Bluetooth v5.0",
      buttonText: "Learn more",
    },
    {
      id: 4,
      title: "Boat Rockerz",
      description:
        "Bluetooth Stereo Wireless Earphone with Up to 8 Hours of Uninterrupted Music, Fast Charging, IPX5 sweat and water resistance",
      buttonText: "Add to cart",
    },
  ];
  return (
    <div className="flex items-center min-h-screen container mx-auto mt-20 ">
      <div className="grid grid-cols-2 md:grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-12">
        {cardsData.map((card) => (
          <Card
            key={card.id}
            title={card.title}
            description={card.description}
            buttonText={card.buttonText}
            onClick={() => alert(`Button Clicked on ${card.title}`)}
          />
        ))}
      </div>
    </div>
  );
};

export default Cardgrid;
