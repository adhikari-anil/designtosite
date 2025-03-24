// import Form from "@/app/components/form/Form";
// import Navbar from "@/app/components/navbar/Navbar";
// import TextPart from "@/app/components/TextPart/textPart";

// const Hero2 = () => {
//   return (
//     <>
//       <div
//         className="w-full bg-primaryblue flex flex-col min-h-screen text-white relative gap-32"
//         style={{
//           position: "absolute",
//           top: 0,
//           left: 0,
//           width: "100%",
//           height: "100%",
//           backgroundImage: "url('/background.jpeg')",
//           backgroundSize: "cover",
//           backgroundPosition: "25% 79%",
//         }}
//       >
//         <div
//           style={{
//             position: "absolute",
//             top: 0,
//             left: 0,
//             width: "100%",
//             height: "100%",
//             backgroundColor: "rgba(0, 0, 0, 0.35)", // Equivalent to bg-black/35
//           }}
//         ></div>
//         <Navbar />
//         <TextPart />
//         <Form />
//       </div>
//     </>
//   );
// };

// export default Hero2;

import Form from "@/app/components/herosection/form/Form";
import Navbar from "@/app/components/herosection/navbar/Navbar";
import TextPart from "@/app/components/herosection/TextPart/textPart";

const Hero2 = () => {
  return (
    <div className="relative min-h-screen w-full">
      {/* Background image and overlay */}
      <div
        className="absolute inset-0 bg-cover bg-[25%_75%]"
        style={{ backgroundImage: "url('/background.jpeg')" }}
      >
        <div className="absolute inset-0 bg-black/35"></div>
      </div>

      {/* Content container with z-index to appear above the background */}
      <div className="relative z-10 flex flex-col min-h-screen text-white md:gap-32 gap-28">
        <Navbar />
        <TextPart />
        <Form />
      </div>
    </div>
  );
};

export default Hero2;