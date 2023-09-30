import Cud from '../img/portGal/Cud.png';
import Roo from '../img/portGal/Roo.png';
import Mas from '../img/portGal/MasSv.png';
import Eda from '../img/portGal/Eda.png';
import Dre from '../img/portGal/Dream.png';
import Cha from '../img/portGal/Cha.png';
import Uni from '../img/portGal/Uni.png';
import Des from '../img/portGal/Des.png';
import Arc from '../img/portGal/Arch.png';
import Rud from '../img/portGal/Rudy.png';
import { ArcData, ChaData, CuddData, DesData, DreData, EdaData, MasData, RooData, RudData, UniData } from './SkillData';

enum Title {
    rud = "Rudy Java Project",
    cudd = "Cuddwords Web Application",
    roo = "Room-Rai Project",
    mas = "Master/Slave Architecture",
    eda = "Event-Driven Architecture",
    dre = "Dreamlendar Project",
    cha = "Chatty Project",
    uni = "Unibake Project",
    des = "Destroy Benchmark Project",
    arc = "Architectus Project",
}

enum Created {
    rud = "March 2023",
    cudd = "January 2023",
    roo = "November 2022",
    mas = "October 2022",
    eda = "October 2022",
    dre = "April 2022",
    cha = "March 2022",
    uni = "December 2021",
    des = "December 2021",
    arc = "March 2021",
}

enum Path {
    rud = "Rudy-project",
    cudd = "cudd-words",
    roo = "Room-rai-Project",
    mas = "setup-master-slave-replication-MySQL-on-CentOS7",
    eda = "event-driven-architecture-with-RabbitMQ",
    dre = "dreamlendar_project",
    cha = "chatty_project",
    uni = "Unibake",
    des = "DestroyBenchmark",
    arc = "Architectus",
}

export const PortfolioData = [
    {
        name: Title.rud,
        when: Created.rud,
        img: Rud,
        link: Path.rud,
        icon: RudData,
    },
    {
        name: Title.cudd,
        when: Created.cudd,
        img: Cud,
        link: Path.cudd,
        icon: CuddData,
    },
    {
        name: Title.roo,
        when: Created.roo,
        img: Roo,
        link: Path.roo,
        icon: RooData,
    },
    {
        name: Title.mas,
        when: Created.mas,
        img: Mas,
        link: Path.mas,
        icon: MasData,
    },
    {
        name: Title.eda,
        when: Created.eda,
        img: Eda,
        link: Path.eda,
        icon: EdaData,
    },
    {
        name: Title.dre,
        when: Created.dre,
        img: Dre,
        link: Path.dre,
        icon: DreData,
    },
    {
        name: Title.cha,
        when: Created.cha,
        img: Cha,
        link: Path.cha,
        icon: ChaData,
    },
    {
        name: Title.uni,
        when: Created.uni,
        img: Uni,
        link: Path.uni,
        icon: UniData,
    },
    {
        name: Title.des,
        when: Created.des,
        img: Des,
        link: Path.des,
        icon: DesData,
    },
    {
        name: Title.arc,
        when: Created.arc,
        img: Arc,
        link: Path.arc,
        icon: ArcData,
    },
]