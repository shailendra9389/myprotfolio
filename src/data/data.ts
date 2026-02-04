import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const personalData = {
  name: "Shailendra Pratap Singh      ",
  initials: "SP",
  url: "https://www.linkedin.com/in/sps54kh4/",
  location: "Punjab, UttarPradesh",
  locationLink: "https://www.google.com/maps/place/phagwara",
  description:
    "Full stack developer and machine learning enthusiast focused on building reliable, scalable web applications with strong performance and intelligent solutions.",
  summary:
    "I’m a software engineer and problem solver with two years of experience, building reliable and scalable systems used by hundreds of thousands of users. I hold a Bachelor’s degree in Computer Science and enjoy tackling complex challenges while continuously learning and improving.",
  avatarUrl: "/myimage.png",
} as const;

export const skillsData = [
  {
    category: "Backend",
    skills: [
      { name: "TypeScript", icon: "logos:typescript-icon" },
      { name: "Javascript", icon: "logos:javascript" },
      { name: "C++", icon: "logos:c-plusplus" },
      { name: "NodeJs", icon: "logos:nodejs-icon" },
      { name: "ExpressJS", icon: "lucide:route" },
      { name: "SQL", icon: "ph:file-sql" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "MySQL", icon: "logos:mysql-icon" },
      { name: "MongoDB", icon: "logos:aws-dynamodb" },
      { name: "REST APIs", icon: "lucide:cloud-cog" },
      
      { name: "Vector Databases", icon: "lucide:database-zap" },
     ,
    ],
  },
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Redux", icon: "logos:redux" },
      { name: "HTML5", icon: "logos:html-5" },
      { name: "CSS3", icon: "logos:css-3" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Webpack", icon: "logos:webpack" },
      { name: "Single Page Applications", icon: "material-symbols:web" },
      { name: "Responsive Design", icon: "material-symbols:responsive-layout" },
    ],
  },
  {
    category: "Machine Learning",
    skills: [
      { name: "Pandas", icon: "logos:pandas-icon" },
      { name: "NumPy", icon: "logos:numpy" },
      { name: "Matplotlib", icon: "logos:matplotlib-icon" },
      { name: "Scikit-learn", icon: "logos:scikit-learn-icon" },
      { name: "Seaborn", icon: "logos:seaborn-icon" },
      { name: "ML Models", icon: "lucide:brain" },
      { name: "Selenium", icon: "logos:selenium" },
    ],
  },
  {
    category: "DevOps",
    skills: [
      { name: "AWS", icon: "logos:aws" },
      { name: "Docker", icon: "logos:docker-icon" },
      { name: "Kubernetes", icon: "logos:kubernetes" },
      { name: "Jenkins", icon: "logos:jenkins" },
      { name: "GitHub Actions", icon: "logos:github-actions" },
    
      { name: "Infrastructure as Code", icon: "material-symbols:code" },
    ],
  },
  {
    category: "Practices",
    skills: [
      { name: "Database design", icon: "material-symbols:database" },
      { name: "Event‑driven architecture", icon: "lucide:share-2" },
      { name: "Agile", icon: "lucide:repeat" },
      { name: "Scrum", icon: "material-symbols:group" },
      {
        name: "OOP",
        icon: "material-symbols:code",
      },
      {
        name: "TDD",
        icon: "lucide:flask-conical",
      },
    ],
  },
  {
    category: "Tools",
    skills: [
      { name: "Linux", icon: "logos:linux-tux" },
      { name: "Postman", icon: "logos:postman-icon" },
      { name: "Git", icon: "logos:git-icon" },
      {name:"Power BI",icon:"logos:power-bi"},
      {name:"Excel",icon:"logos:microsoft-excel"},
     
    
      {
        name: "Sumo Logic",
        icon: "material-symbols:analytics",
      },
    ],
  },
  
] as const;

export const navbarData = [
  { href: "/", icon: HomeIcon, label: "Home" },
  {
    href: "https://leetcode.com/u/ShailendraPratap9389/",
    icon: NotebookIcon,
    label: "Leetcode",
  },
] as const;

export const contactData = {
  email: "hello@example.com",
  tel: "+91 9389704171",
  social: {
    GitHub: {
      name: "GitHub",
      url: "https://github.com/shailendra9389",
      icon: Icons.github,
      navbar: true,
    },
    LinkedIn: {
      name: "LinkedIn",
      url: "https://www.linkedin.com/in/sps54kh4/",
      icon: Icons.linkedin,
      navbar: true,
    },
    Email: {
      name: "Email",
      url: "/#contact",
      icon: Icons.email,
      navbar: true,
    },
  },
} as const;

export const experiencesData = [
  {
    company: "Intellimeta",
    href: "https://Intellimeta.com/",
    location: "Remote",
    title: "Software Engineer",
    logoUrl:
      "data:image/jpeg;base64,/9j/4AAQSkZJRgABAQAAAQABAAD/2wCEAAkGBw8PEhUQDw8VFhAWEhAQFRUQFREWFxAVGxkXFhYVFhUYKCggGB0lHxcTIjEhJSkrLi4uGCAzODMtNygtLisBCgoKDg0OGxAQGyslICU1LS4uLS0uNy0tLSsvNy0vLS8vLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLS0tLf/AABEIAHABwwMBEQACEQEDEQH/xAAcAAEAAgIDAQAAAAAAAAAAAAAABgcBBQIDBAj/xABKEAABAwIBCAUGCgcHBQAAAAABAAIDBBESBQYTFSExk9EHIkFRVBQyYXGBkQgjNDVCUnJzsbIzU3SCobPSFhdiZISSwSQ2Q8LD/8QAGgEBAAIDAQAAAAAAAAAAAAAAAAQFAQIDBv/EADYRAQABAwIEAwUFCAMAAAAAAAABAgMRBBIFEyExQVFxFDIzYYEiNFKRoRUjJESxwdHwQuHx/9oADAMBAAIRAxEAPwCjUBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEBAQEGUBBhAQEBAQEGUGEBAQEBAQEBAQEBAQEBAQEEs6LMjw12U6eCobiiJe9zTufga54afQSBdB9VMyRStADaaIACwAjZsHuQctWU3h4uGzkgaspvDxcNnJA1ZTeHi4bOSBqyn8PFw2ckDVlP4eLhs5IGrKbw8XDZyQNWU/h4uGzkgaspvDxcNnJA1ZTeHi4bOSDGrKbw8XDZyQZ1ZT+Hi4bOSBqyn8PFw2ckDVlP4eLhs5IGrKfw8XDZyQNWU/h4uGzkgasp/DxcNnJA1ZT+Hi4bOSBqyn8PFw2ckDVlP4eLhs5IGrKfw8XDZyQNWU/h4uGzkgasp/DxcNnJA1ZT+Hi4bOSBqyn8PFw2ckDVlP4eLhs5IGrKfw8XDZyQNWU/h4uGzkgarpvDxcNnJBjVVN4eLhs5IOuegpI2l74Ig1oLiTGzYB7FrXXFFM1T2htRRNdUUx3lVOXallVMXshYGDqsa1jRZvebDeV5XUaqu7cmYno9totDb09qKa4jPi1hoY9+hb6eo3euHNuY96Uvk2fwwwKKLshZs39RuxObc/FP5k2LMd6YY8ji/VM/2N5Jzbn4p/M9ntfhj8nI0Me7Qt7/Mbt/gnNuec/mxybOM4hh1DEN8LPaxvJObc85ZixZntTB5DFa+hZbdfA3knNufik5FnONsMCji/VM/2NWObc/FP5ns9r8MOufJlPI0tfCwg7+qB7iNy3o1N2icxVLW5o7NdO2aYwrDOTJXkk5jBuwgPYTvwnv8AUbj2L1Gkv861FTxWv0vs96aPDwatSUNhAQEBAQEBAQEBAQEBAQTzoQ+eKf7M/wDLeg+pJSbHD51ja/f2LMYz1YnOOiF5vVmVHVIbO12ju7HjaA1osbYT67K31VvSRZzbnr4KrTXdVN7FcdE2VOtmUGEHjynlaClAdPIGA3AvvdbfYdvYutmxcvTiiMtaq4p7uzJ1dHURtmiN2OFwSCL9m5a3LdVuqaau8MxOYzD0rRkQEFfnO+q1l5JZmi0+i804sPrvvU/2WjkczxTY01PJ3pNnflOSkpXzRWxgsAxC42kA7FDt07qsOeksxduxRU8uY2W5q6F8kwbibIWDALC1gf8AlZu0RTOHTXaamxc20tHndXZWZVYaZr9D1NHo2BwdsF8R9d1zWGgtaKqzM3p6pxBMWxB89muEYdJ3NIF3be4bUUleN07eyhc6enGsfM5mTY2MgBIa6Rpe+W30rbmg929GrqpenivbC5klNC+o2YJBia0DtxRjzju3EIPNkvpwyrHIHVDIpYvpMDMDrf4XDd7QUH0BkDLENdTx1UBvFI0OF947C0+kG4PqQUNl7plyvBUzws0GCOeaJt4iTha9zRc32mwCDwf34ZZ/y/CP9SCbZA6SMoT5HrcoP0XlEErGR2YQ2xwXu2+3zighP9+GWf8AL8I/1IM/34ZZ/wAvwj/UgsXobz8rsryVDavR2iZE5uiYW7XFwN9pvuCB0jdLsWTZDS0kbZqlux7nEiOE/VNtrnd42W70EFoenfKbX3mgp5GX81oew27g65/AoLuzNzspsrQCopiRY4ZI3WxRO34Xf8HtQb5BhBAc/su4j5LEdgIMhHaexvNUHE9XunlU9vF6bguhx+/r+n+WjzbnDNN8Y2N7oS1jnGwDrjt7O1QdLXFO7M4nHRY8St1V7MRmInrEeTciemmcInFrnF9I1xbcaVwDhI6w3jcpO6zcmI8en1VnL1NmnfGYiIqx8u2DKDYKUvY5jG/FwuBFxpSJQXdUE7MPZ6Eu02rVU0zEeH9WLPP1ERVTMz1n6dC1A+aZ8rosDnnCG3Fm4djge+9tix/D1XKpmYx4N86ym3RTRFWY7+rS5aqxpIZIZBcQRNu3e1wBBuot+uN1NVE+ELDRWauXXRdjvMtxNW0U80vlD8TGmMxkdoLcLgPbt9ilcyxcrqm528FfTY1dm1TyoxM5z/ZwjnoLmPq6JtQ3td8YwROGI/vW96xu0+Zjwz+jNVvW9KuuZj8urRZWfC4ROia1pMQ0jWXs19z3+iyiXZonbt+q20cXad1Nyc4np6NeuCarvpF+UM+5b+Zy9Jwn4M+ryPHfjx6IqrRRsICAgICAgICAgICAgICCedCHzxT/AGZ/5b0H1OhKB5rZbqpqzRSSl0dpdhDezcrrW6S1b08V0x16KbSaq7XqJoqnp1ejPfLVRTTRiKQtaWYnAAdbrela8N0lu9bq3R1dNfqa7NynbPR4q2tytXAyUrXRwfRDS1rn+m52n2LrbtaPTztuzmpjm6m99qiMQ82Z2ctUKltPUPc9ryWfGecx43bd/ZZdeIaGzyebajH+G+m1Fe/ZW1mfgrdJ/wBTfQ6SXQ3w2ts3W27sO9SuFez7P3fvYjJqZr/5dnqzZ1xhh0OPyXE236O2DF1t+3vXDXexZr3e/wD3dLPNxHk3OfWd8tO8UtLbS2GN9r4b7mtHfu96hcP4fTdp5tz3UuqvE4aeXJucDWGoNQ/Y3GWaS7gN/mbvYu3N0E1bIp+rtCQ9H2dEla18U9tNGA7EBbSNOy5HeD+Kg6/SRYqiae0tq6MIgfnr/VhSP5T6LGPu0+ic9JHyCT7UX5gqu170OHDfvFLX9FHyaT74/lat9R7zvxf40ejX5+ZwVdPViOGYsZo43WAbvJdc7R6lHlN4XobN7T1V1xmeqR5+vOqqw32miqP4xm6y89VGJlUXwbadjqmqe5gL2wxhriAS3E44rHsvYe5GEe6RKGL+0EkIjAjfU0gc0CwOMRF+7vufegsj4RNJGMnQuDGhzKljGkADC0sku0dw2DZ6Ag2XQC4nJLbndPOB6BcH8SUFR5v5WpqLL8tRVm0DaquxEtL7XMgHVF+0hBc9D0kZvzyMhjlaZJJGRMHk8gu5xDWi5bs2kIJw2njALQxoad4DRY+sIIv0l0kQyVWkRsBFPJYhrQQgrX4NsLHmtxsa6wprYgDb9J3oLnym5tNBNLGxocyGWTqgC5a0uG5B849DOQocqZRe6tGkayN9Q5r9oleXAdfvF3E27UF+5z5pUNdTPglp4wMDsDmMaHQutscwjdZBR/wea57MpOiB6ktPJiHYSwtc13s6w/eKD6RQaPOvLQpIThPxr7tYO7vd7FB12q5Nvp3lYcN0U6m7ie0d1UPcSSSbkkk37T2leWznq9xTTFMREPL5azS6Hbjtfds3A2v6iF25FfL5ng4+0Uc3leL208bnuDWeeXAD1ncuVMTM4h0uVU00TVV2h7azJUzX4LiR+0kRkuLbGxxdy6V2a4q295RbOss1Ubvdj59HQ7Js4IBheC4kAFp2kbwFrNuuMRju7RqrUxMxVHRlmTZycIidcODTsOwm1ge7eE5VczjEk6uzEZmqHVWUj4XmORtnN2EFYroqomaao6t7N6m7Rvo7S6Vq6iwCCu+kX5Qz7lv5nL0nCPgz6vI8e+PHoiitFGICAgICAgICAgICAgICCedCHzxT/Zn/AJb0H1OgrPMv5f7Jl6PiP3SPo89oPvU/V39Jf6aP7o/mK14N7lTfivxKU7ya0CGMAWGjZu9QVDd+JPrK6te5Csn7Mr7PFj8V6WOvDuvkrMfxX1bnpZ/Rwfbk/AKJwL4lXola33EgzH+QwfYP4lV3EfvNfqkWPhwrjLjZXZUeGECXygYC/cDswXv+6vQ6ebcaCJntjrhx681LXUucJFtPBaxG5v8ASqXfofKpMp+bjmJmnU0M75ZyyxjLBgcTtJB27PQmu1tF6iKaI7OldcVQjJ+e/wDVhdf5T6LCPu30TjpI+QSfai/MFV2ffhw4b94peDoo+TSffH8rVvqPed+L/Gj0RzpM+XD7mL8XKPK34L90q9ZTTP35prP2Kf8AllZeVq96VU/Bq/T1n3UP5nI1aHpE/wC5D+1UH5YUFj/CL+bY/wBri/JKg9Xwf/mkftE//qgp7Jmb0eU8uTUcr3MY+qriXMtiGF0jtl9nYgtbJPQhRU08VQ2rnLopYpgHCKzixwcAbDdsQWogjHSd81Vv7NIgrP4NG+t9VL/9UFwZz/I6n9mqPyOQfK2YWeUuRpnzxRMkL4zERIXAAXDr7PUgnL+nytII8ig2gjzpEGn6AfnZv3E/4BB9K1lSyJjpHmzWgklaXLkW6Zqq7N7duq5XFNPeVQ5dyo+rmdK7duY36rewLyWovzermuXu9FpadNaiiO/i16jpjUyZFxTacSlpLw7YNpb1fiy6/mdXdZTqdbi1y5pz/vf1V1Wgze5sVY/3s3MLwHB1r2IOw2v7exQoTq6c0zS3k+chIIbGR8S+LE55c/rOa65dbbbDb2qZOr8o8MfPwVNPCfxVeOe3TxcnZzYnFz4QQZHSWLr4SWBmy49F09snOZjxyfsmIjFNWOmP1y66/OR0oIazDeSKXY4/QaG2O6+4FLmsqr8MdctrPCqbfec9Jj82uytWCeV0oaW4jcgm+3tso965zK5r807S2ORbi3nOHjXJJEBBXfSL8oZ9y38zl6ThHwZ9XkOPfHj0RRWikEBAQEBAQEBAQEBAQEBBPOhD54p/sz/y3oPqcoIFmtkWphrNJJEWstLtNrbdyu9bqrVzTxRTPXoptJpblGomuqOnV25+ZHqaiVjoYi4CMtJFthue9a8M1NqzRVFc4b8Q09y7XE0wmNEwtjY0ixDGA+ggBVFyc1TK0ojFMQgD8g1es9PoXaLykPx9W2G+9X0ayz7Dy89cIM2K+dux0y3fSFkWWrhYYW4nxvLsI3uaRY29OwKFwrVUWLs7+0pGotzXT0RXIEuWoQ2CGGQRteDZ8YFhe5GJ24HarPV06C5m5VV1nycLU3o6YbjPrNOaeQVdILyWbjaDY3b5rmnv2D3BQuH6+i3RNq728EuaOuWtgy9l8DR+TOc61sToTf1k7Aulem0HvRV+rrCXZnsygI3nKBBc5+Jnm4mi21pDdgGzZ6yqzV8nd+67M1Y8EEzryFXRVr6iGJ7gZBLG+NpdY7DttuIIUyxetza2VLKxdtzbimpIfJcpV2T5o6phE5e10YcGtLmjCbWG7cd6hV7KLn2ezSiu1Z1FNVM9EczdjyvSu0cEEjWue0vDoxbft2ndsWbk0VdVpqqtHdjdVPXHRtc/cg1dRViSGBz2aONt223guuP4qLhpwvW2bNiaa5xPVKs8qOWbJtVDEwulfSSxtaN7nFhAA9N0eeq7yrnoGzYr6CaqdWUr4mvjia0yADEQ5xICMNPnvmflKfLxqoqOR1P5RRv0jQMOFrYg47+yx9yCc9OORKquoGRUkLpZBUxvLWWuGhkgJ95HvQejoXyPU0WThDVQujl00zsL7XsbWOxBTWWsycutrqiopqOobepqXskiOElrnusQ4G9iD/FBj+z+dn1cocaX+pBb3QvRZShpp25TE4kM4LPKXue7BgbuJJ2Xugkmf9HJUZOq4YWF8r4Hta1u9x7AEEB6BM266gNX5ZTPixinwaQDrW0l7eq496Czs4IXSUtQxgu90EzWgb3OLCAAgpfoYzGqoKuV2Usn2iMBDfKGMc3HibuBvttdBcMubdAWm1DT3sf/AAxd3qQUv0M5nZSospNmqqOSOIQzNxvAtcgWGxBOc+8u6V/k0Z+LYeuR9J/d6h+K85xLV8yrl09o/q9XwXQbKedXHWe3o1WQKGGRkz5t0YjIxOLBtdbaQCount0VxVNXgma/UXbdVFNvxz4Zdzc2y+PSMeBdzSGu7GufgaQ7eR6bLanR1V0b4n/xx/auy5sqjOPH54YbkWECcGVxdEzFsYQC7FhO/eOaxGmp+1mezNXELn2JimMVT5u05qnEGCYXxtjfdrgGktLxhP0hs7FvOinOM/73axxeJiZ2/OP6PMzIYdGZmTAwtEmJxBBa5tg1tv8AFcWXKNNmia4npDtPEJiuLdVH2pxj6/4c8iZOhkgklkFy17Gi7i0WIJ7AduxbWbNNVuqufBrrtVdt3qbdE948shzfxMxMk65iZMGYT5rn4AMXabp7LM05ievScMftPbViaemcZ+cRl7GZssjxGSQuboJngtG1jmFoOwHbv3LtGhxndPhlGq4tVXjZGOsfWHB2bWwRhwMhqGxh+0DAY8e1vYVpOjnG3xmcZ+jpHFZzNeOmM4+ecPPU5vNjD3OnGFrYzsBJu4kBpA3bQtLmk2RMzV2w6WuJzcmKYo6zn9Hky1kjyYss/G17SQ4CwO69u/eueo082sfNK0es9o3dMTCqOkX5Qz7lv5nK84R8GfV5/j3x49EUVqoxYBAQEBAQEBAQEBAQEBBLOizLENFlOnnqHYYg57HOO5mNrmBx9AJF0H1UzK1K4AipiIO0ESMIP8UHLWdN4iLiM5oGs6fxEXEZzQNZ0/iIuIzmgazp/ERcRnNA1nT+Ii4jOaBrOn8RFxGc0DWdP4iLiM5oGs6fxEXEZzQNZ0/iIuIzmgazp/ERcRnNA1nT+Ii4jOaBrOn8RFxGc0DWdP4iLiM5oGs6f9fFxGc0DWdP4iLiM5oGs6fxEXEZzQNZ0/iIuIzmgazp/ERcRnNA1nT+Ii4jOaBrOn8RFxGc0DWdP4iLiM5oGs6bxEXEZzQNZ03iIuIzmgazpvERcRnNA1nT+Ii4jOaBrOn8RFxGc0GjzszljgiwwytdK+7QWuacA7XbFX8Q1E2reKe8rLhmki/dzX7sKyvfbdeZmmXtYqoiMZhzZK4AtDjhda4vsdbaLp9qGs8uqYmcZh2+XzYRHpXYBubiNh2/it99zG3M4c+TY3bsRlydlKcm5ldctLD1vo93qTfcznMscnT4xiPMdlGc4bzP6vm9Y9Xs2JNdc95noRY08Z6R1Z1g/QmAWDC4Pdbe8jdiPoWYrqijZ4NeRa5vNmesR0+Trpq2WIERyFoO04Ta61pqrp6Q6XLdm5Oa8SeWy/rHbg3f2A3A96Zq+Zy7HbEO05VqL30z77QDi3X3/gFtzLvfMtPZ9NjGIcNYTbfjXbXB5629w3H1rG6vzlnk6fp0j/piaulffFI43te5323X9SxNVc98s02rFHaIdddlBzhinlu1o3yO2NHtW2LlyYjrJTFixEzGIVNnZlNtVUF7P0bQI2nvA7faSV6fQ2Js2opq793jeJamNRfmqns0qloAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICDIKMxMx2chIe8+8rGIZ31ecmkd9Y+8ptjyZ31ecmkd9Y+8ptjyN9XnJpHfWPvKbY8jfV5yaR31j7ym2PI31ecmkd9Y+8ptjyN9XnJpHfWPvKbY8jfV5yaR31j7ym2PI31ecmkd9Y+8ptjyN9XnJpHfWPvKbY8jfV5yaR31j7ym2PJjfV5ywXk7yfaUxEE1TPeXFZaiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICD//2Q==",
    start: "July 2025",
    end: "Jan 2026",
    description: [
      "Contributing to the development of 3D models for Digital Twin solutions, enhancing real-time visualization and interaction capabilities.",
      "Collaborating with cross-functional teams to design, develop, and optimize interactive 3D environments for digital twin applications.",
      "Gaining hands-on experience in remote software development workflows, using Git, and Blender, and version control systems",
    ],
  },
] as const;

export const educationData = [
  {
    school: "Lovely Professional University",
    href: "https://www.lpu.in/",
    degree: "Bachelor of Computer Science and Engineering",
    logoUrl: "/image.png",
    start: "Aug 2023",
    end: "Present",
    description: [
      "CGPA 8.52/10",
      "Major in Computer Science",
      "Minor in Full Stack Web Development,Machine Learning",
      "Minor in UI/UX",
    ],
  },
] as const;

export const projectsData = [
  {
    title: "Formify AI",
    href: "https://github.com/shailendra9389/formify.ai",
    dates: "2026",
    active: true,
    description:
      "Designed an AI-powered form builder that increased form submission efficiency by 40%. Designed and implemented Formify AI, an advanced platform that enables users to create, deploy, and manage attractive forms with real-time analytics and improve data tracking by 25% for each submission.",
    detailedDescription: `Designed an AI-powered form builder that increased form submission efficiency by 40%. Designed and implemented Formify AI, an advanced platform that enables users to create, deploy, and manage attractive forms with real-time analytics and improve data tracking by 25% for each submission.`,
    keyFeatures: [
      "Integrated advanced analytics and implemented authentication & access-control features using Clerk, enabling secure usage tiers and improving platform reliability and user onboarding efficiency by 20%.",
      "Optimized user experience with dynamic form customization: engineered dynamic UI components for customizable form generation, enhancing user engagement and improving deployment efficiency for both individual users and businesses.",
    ],
    technologies: [
      { name: "React.js", icon: "logos:react" },
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Node.js", icon: "logos:nodejs-icon" },
      { name: "Express.js", icon: "logos:express" },
      { name: "Supabase", icon: "logos:supabase-icon" },
      { name: "Redux.js", icon: "logos:redux" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Clerk", icon: "simple-icons:clerk" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shailendra9389/formify.ai",
        icon: "github",
      },
       {
        type: "Demo",
        href: "https://www.linkedin.com/posts/sps54kh4_ai-formbuilder-reactjs-activity-7297236094721372160-aUfE?utm_source=share&utm_medium=member_desktop&rcm=ACoAAEZz6swB2NB4Md7zsL9MzUb1FVl10JQtLx0",
        icon: "globe",
      },
    ],
    image: "/graphi.png",
    images: ["/job-portal.png"],
    video: "",
  },
  {
    title: "AI Carrer Coach Platform",
    href: "https://github.com/shailendra9389/carrer-coach",
    dates: "May 2025 – Jun 2025",
    active: true,
    description:
      "Designed an AI Career Coach using Next.js, Tailwind CSS, Shad CN UI, and Clerk, resulting in a 100% responsive UI and creating resumes, cover letters, prep materials and Industry Insights.",
    detailedDescription: "Designed an AI Career Coach using Next.js, Tailwind CSS, Shad CN UI, and Clerk, resulting in a 100% responsive UI and creating resumes, cover letters, prep materials and Industry Insights.",
    keyFeatures: [
      "Integrated Gemini API, improving learning efficiency by 35%, and automated personalized coaching workflows using Inngest, increasing document generation speed by 60%.",
      "Developed a scalable backend using Prisma ORM and PostgreSQL, optimizing query performance by 40% and enabling realtime analytics to track 5+ key learning metrics per user.",
    ],
    technologies: [
      { name: "Next.js", icon: "logos:nextjs-icon" },
      { name: "Tailwind CSS", icon: "logos:tailwindcss-icon" },
      { name: "Prisma ORM", icon: "logos:prisma" },
      { name: "PostgreSQL", icon: "logos:postgresql" },
      { name: "Clerk Auth", icon: "simple-icons:clerk" },
      { name: "Gemini API", icon: "simple-icons:googlegemini" },
      { name: "ShadCN UI", icon: "simple-icons:shadcnui" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shailendra9389/carrer-coach",
        icon: "github",
      },
    ],
    image: "/carrer.png",
    images: ["/carrer.png"],
    video: "",
  },
  {
    title: "Heart Stroke Predictor",
    href: "https://github.com/shailendra9389/Heart_stroke_predictor",
    dates: "May 2025 – Jun 2025",
    active: true,
    description:
      "Performed exploratory data analysis (EDA) to study health indicators, analyze correlations, handle missing values, and identify key patterns associated with stroke risk.",
    detailedDescription: "Performed exploratory data analysis (EDA) to study health indicators, analyze correlations, handle missing values, and identify key patterns associated with stroke risk. Applied feature engineering and feature scaling using StandardScaler to optimize data quality and improve model performance. Built and evaluated multiple machine learning models including Logistic Regression, Decision Tree, KNN, SVM, and Naive Bayes using accuracy and F1-score to select the best-performing model.",
    keyFeatures: [
      "Performed exploratory data analysis (EDA) to study health indicators, analyze correlations, handle missing values, and identify key patterns associated with stroke risk.",
      "Applied feature engineering and feature scaling using StandardScaler to optimize data quality and improve model performance.",
      "Built and evaluated multiple machine learning models including Logistic Regression, Decision Tree, KNN, SVM, and Naive Bayes using accuracy and F1-score to select the best-performing model.",
    ],
    technologies: [
      { name: "Python", icon: "logos:python" },
      { name: "Pandas", icon: "logos:pandas" },
      { name: "Scikit-learn", icon: "logos:scikit-learn" },
      { name: "Matplotlib", icon: "logos:matplotlib" },
      { name: "Seaborn", icon: "logos:seaborn-icon" },
    ],
    links: [
      {
        type: "Github",
        href: "https://github.com/shailendra9389/Heart_stroke_predictor",
        icon: "github",
      },
    ],
    image: "/heart.png",
    images: ["/heart.png"],
    video: "",
  },
  {
    title: "EduStack — Modern Learning Management System (LMS)",
    href: "https://github.com/manavsingh345/EduStack",
    dates: "2025",
    active: true,
    description:
      "EduStack is a modern LMS built with the MERN stack, Tailwind CSS, and Clerk for authentication. It features dynamic dashboards for educators and students, enabling efficient course management, content delivery, and interactive learning—all designed to streamline online education.",
    detailedDescription: `EduStack is a modern LMS built with the MERN stack, Tailwind CSS, and Clerk for authentication. It features dynamic dashboards for educators and students, enabling efficient course management, content delivery, and interactive learning—all designed to streamline online education.`,
    keyFeatures: [
      "Create, update, and manage courses with syllabus/resources, student monitoring, and performance analytics.",
      "Browse available courses, enroll easily, and access all course materials in one place.",
      "Leave ratings and reviews to share feedback and improve learning quality.",
      "Track personal profile details and learning progress seamlessly.",
    ],
    technologies: [
      { name: "React", icon: "logos:react" },
      { name: "NodeJs", icon: "logos:nodejs-icon" },
      { name: "ExpressJS", icon: "logos:express" },
      { name: "MongoDB", icon: "logos:aws-dynamodb" },
      { name: "Tailwind", icon: "logos:tailwindcss-icon" },
      { name: "Google Gemini API", icon: "simple-icons:googlegemini" },
    ],
    links: [
      {
        type: "Github",
        // href: "https://github.com/manavsingh345/EduStack",
        icon: "github",
      },
    ],
    image: "/edu.png",
    images: ["/edu.png"],
    video: "",
  },
 
] as const;