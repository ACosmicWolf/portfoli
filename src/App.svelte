<script lang="ts">
  import Navbar from "./lib/Navbar.svelte";
  import Icons from "./lib/Icons.svelte";
</script>

<head>
  <!-- Meta Tags -->
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <meta
    name="description"
    content="Arsh Mehta's (ACosmicWolf) Portfolio Website. I'm a 15-year-old student from India, currently in 10th grade, and I'm a self-taught programmer."
  />
  <meta name="author" content="Arsh Mehta" />
  <meta name="keywords" content="Arsh Mehta, ACosmicWolf, Arsh, Mehta" />
  <meta name="theme-color" content="#000000" />

  <!-- Open Graph Tags -->
  <meta property="og:title" content="ACosmicWolf" />
  <meta
    property="og:description"
    content="Arsh Mehta's (ACosmicWolf) Portfolio Website. I'm a 15-year-old student from India, currently in 10th grade, and I'm a self-taught programmer."
  />
  <meta property="og:type" content="website" />
  <meta property="og:url" content="https://acosmicwolf.me" />
  <meta
    property="og:image"
    content="https://acosmicwolf.me/profileimage.webp"
  />

  <!-- Title -->
  <title>ACosmicWolf</title>
</head>

<Navbar />

<main>
  <img
    src={"profileimage.webp"}
    alt="Profile"
    width="100px"
    height="100px"
    class="profilepic"
  />

  <h1>Hey there, I am Arsh! 👋</h1>

  <div class="about">
    <p>
      I'm a 15-year-old student from India, currently in 10th grade, and I'm a
      self-taught programmer.
    </p>
    <p>
      I started programming when I was 13 years old with Python, but then I
      became very interested in web development and started learning HTML, CSS,
      and JS. After mastering the basics of JS, I learned about frameworks and
      discovered React and Next.js.
    </p>
    <p>
      I've been using NextJS, Firebase, and Tailwind CSS for my projects, and
      I'm continuously learning more about them.
    </p>
    <p>
      In addition to web development, I enjoy automating tasks and making my
      life easier. I'm also keen on learning more about how computers work under
      the hood.
    </p>
    <p>I'm active on Discord, and you can contact me there.</p>
    <p>
      Apart from programming, I like playing video games and watching anime in
      my free time.
    </p>
  </div>
</main>

<div class="separator" />

<div class="links">
  <h1>Links</h1>

  <table>
    <tr>
      <td> Github </td>
      <td>
        <a href="https://github.com/ACosmicWolf" target="_blank">ACosmicWolf</a>
      </td>
    </tr>
    <tr>
      <td> Linkedin </td>
      <td>
        <a href="https://linkedin.com/in/arshmehta009" target="_blank"
          >arshmehta009</a
        >
      </td>
    </tr>
    <tr>
      <td> Instagram </td>
      <td>
        <a href="https://instagram.com/arshmehta.009" target="_blank"
          >arshmehta.009</a
        ></td
      >
    </tr>
    <tr>
      <td> Discord </td>
      <td>
        <a href="https://discord.com/users/864575191915823116" target="_blank"
          >acosmicwolf</a
        ></td
      >
    </tr>
    <tr>
      <td> Anime List </td>
      <td>
        <a href="https://anilist.co/user/ACosmicWolf/animelist" target="_blank"
          >ACosmicWolf</a
        ></td
      >
    </tr>
  </table>
</div>

<div class="separator" />

<div class="technologies">
  <h1>Technologies I Use</h1>

  <div class="tech-icons">
    <Icons name="html" title="Html" />
    <Icons name="css" title="CSS" />
    <Icons name="js" title="Javascript" />
    <Icons name="python" title="Python" />
    <Icons name="nextjs" title="NextJS" />
    <Icons name="react" title="React" />
    <Icons name="svelte" title="Svelte" />
  </div>
</div>

<div class="separator" />

<div class="projects" id="projects">
  <h1>Projects</h1>

  <div class="project">
    <h2>Portfolio</h2>
    <p>
      This is my portfolio website, made with Svelte. It's a simple website to
      showcase my skills and projects. It's also my first Svelte project.
    </p>
    <a
      href="https://github.com/ACosmicWolf/ACosmicWolf.github.io"
      target="_blank">Github</a
    >
    <a href="https://acosmicwolf.me" target="_blank">Visit</a>
  </div>

  <div class="project">
    <h2>NextBase</h2>
    <p>
      A Social Media Website created using NextJS and Firebase. It's a simple
      social media website where you can create posts, view other people's
      posts, view users, and follow other users.
      <br />
      This project is still in development.
    </p>
    <a href="https://github.com/ACosmicWolf/nextbase" target="_blank">Github</a>
    <a href="https://nextbase.acosmicwolf.me" target="_blank">Visit</a>
  </div>

  <div class="project">
    <h2>Mehta Udyog</h2>
    <p>
      A stock and salary management system created using NextJS and Firebase.
      It’s my first real NextJS project so it’s not very good but I have learned
      a lot with this Project. This project’s main goal is to to calculate the
      salaries based on the items made and painted by workers and painters. This
      project also keeps tracks of the stock, the items made by workers, the
      items painted by painters and the sales done. It also generates pdfs based
      on this data. This project is specially made for a furniture store in my
      area and is used by the client and makes his work easier.
    </p>
    <a href="https://github.com/ACosmicWolf/shopwebsite-ts" target="_blank"
      >Github</a
    >
  </div>
</div>

<div class="separator" />

<div class="footer">Made By ACosmicWolf</div>

<style>
  .separator {
    height: 1px;
    background-color: rgb(36, 36, 36);
    margin: 2rem;
    margin-left: 25%;
    margin-right: 25%;
  }

  main {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    margin-top: 2rem;
  }

  .profilepic {
    border-radius: 50%;
    transition: transform 0.3s ease;
  }

  .profilepic:hover {
    transform: scale(1.1);
    cursor: pointer;
  }

  h1 {
    font-size: 1.5rem;
    font-weight: 500;
    text-align: center;
  }

  .about {
    margin-left: 25%;
    margin-right: 25%;
    text-align: left;
  }

  .about > p {
    font-size: 1.2rem;
  }

  .links {
    margin-left: 25%;
    margin-right: 25%;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
  }

  .links > table > tr > td {
    padding: 0.5rem;
    font-size: 1rem;
    color: #808080;
  }

  .links table tr a {
    text-decoration: none;
    font-weight: bold;
    color: white !important;
  }

  .links table tr a:hover {
    text-decoration: underline;
  }

  .footer {
    text-align: center;
    font-size: 0.8rem;
    color: #808080;
  }

  .tech-icons {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
    gap: 2rem;
  }

  .project {
    margin-left: 25%;
    margin-right: 25%;
    text-align: left;
    backdrop-filter: blur(10px);
    padding: 1rem;
    border-radius: 10px;
    border: 1px solid rgb(36, 36, 36);
    margin-bottom: 1rem;
    transition: border 0.3s ease;
  }

  .project:hover {
    border: 1px solid white;
  }

  .project > h2 {
    font-size: 1.2rem;
    font-weight: 500;
  }

  .project > p {
    font-size: 1rem;
  }

  .project > a {
    text-decoration: underline;
    font-weight: bold;
    color: white;
  }

  .project > a:hover {
    text-decoration: none;
  }

  @media only screen and (max-width: 600px) {
    .about {
      margin-left: 5%;
      margin-right: 5%;
    }

    .links {
      margin-left: 5%;
      margin-right: 5%;
    }

    .project {
      margin-left: 5%;
      margin-right: 5%;
    }
  }
</style>
