enum Title {
    home = "Home",
    about = "About",
    skill = "Skill",
    portfolio = "Portfolio",
    certificate = "Certificate",
    contact = "Contact"
}

enum Path {
    home = "/",
    about = "/about",
    skill = "/skill",
    porfolio = "/portfolio",
    certificate = "/certificate",
    contact = "/contact"
}

export const SidebarData = [
    {
        name: Title.home,
        link: Path.home
    },
    {
        name: Title.about,
        link: Path.about,
    },
    {
        name: Title.skill,
        link: Path.skill,
    },
    {
        name: Title.portfolio,
        link: Path.porfolio,
    },
    {
        name: Title.certificate,
        link: Path.certificate,
    },
    {
        name: Title.contact,
        link: Path.contact,
    }
]