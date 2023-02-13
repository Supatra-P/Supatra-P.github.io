enum Title {
    linkedin = "Linkedin",
    github = "Github",
    email = "Email",
    map = "TU Map"
}

enum Path {
    linkedin = "https://www.linkedin.com/in/supatra-p/",
    github = "https://github.com/Supatra-P",
    email = "mailto:supatra.pinjinda@gmail.com",
    map = "https://goo.gl/maps/9KZHoQ2RR84m38328"
}

export const ContactData = [
    {
        name: Title.linkedin,
        link: Path.linkedin,
    },
    {
        name: Title.github,
        link: Path.github,
    },
    {
        name: Title.email,
        link: Path.email,
    },
    {
        name: Title.map,
        link: Path.map,
    },
]