import pro1 from "../assets/project1.png";
import pro2 from "../assets/project2.png";
import pro3 from "../assets/project3.png";

const Data = [
  {
    imgsrc: pro1,
    title: "StreamTrend",
    description: "It is a platform that allows users to watch trailers for popular TV shows and movies from OTT services such as Netflix, Hotstar, and Amazon Prime in a single location. This platform is built with React js and retrieves and displays data and videos on websites via the TMDB API and the Youtube API, respectively. Netlify is also used for hosting.",
    view: "https://streamtrend.netlify.app/",
    source: "https://github.com/CrankyveinDev/Streamtrend",
  },
  {
    imgsrc: pro2,
    title: "Music Player",
    description: "This is a fully functional music streaming web app that allows for seamless music playback experience. It was created with simple HTML, CSS, and Javascript. Firebase Storage is used to store the song files and i have used Firebase's built-in backend for authentication. This platform uses Firebase Firestore to stores song metadata. It is missing an application server. This platform is completely client-side. I've also included a gif generator, which isn't found in any other music streaming web app. Actually, each song is assigned to a category, and the corresponding gif is displayed on the screen only when the user requests to see gifs.",
    view: "https://mastify.netlify.app/",
    source: "https://github.com/CrankyveinDev/music",
  },
  {
    imgsrc: pro3,
    title: "Learnify",
    description: "It is a platform with the goal of using augmented reality to teach users specific information about things like bodily parts, geometric shapes, and alphabets. With the use of this platform, I wish to modernize the way people learn things. What this platform offers is a variety of subsections, such as those for English, Math, Chemistry, and Biology. All of these sections operate under the same general premise, which involves scanning some of the designated markers that are mapped to specific 3D models. Therefore, a person simply needs a camera-enabled gadget, and depending on the selected section and marker, he can view a 3D model of that specific object. For its implementation, this platform makes use of Bootstrap, AR-Library, AR-Frame, and the GLTF or GLB model.",
    view: "https://learnerday.netlify.app/",
    source: "https://github.com/CrankyveinDev/Learnify",
  },
];

export default Data;
