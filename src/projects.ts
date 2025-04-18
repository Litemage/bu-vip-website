import type { Project } from "./types"

export const projects : Array<Project> = [
    {
        name: "Weather Station",
        description: "Environmental data collection and distribution project for Bradley's campus",
        href: "/projects/weather-station",
        img: {
            src: '~/assets/images/weather-station-hero.png',
            alt: 'weatherproof see-through case with internal electronics'
        }
    },
    {
        name: "O.A.S.I.S",
        description: "Automous AGV robot description about the O.A.S.I.S project",
        href: "/oasis",
        img: {
            src: '~/assets/images/oasis-projects.jpg',
            alt: 'wheeled robot with sensors'
        }
    },
    {
        name: "Chess Board",
        description: "Automated chess board that will allow players to move against an AI while the chess board moves its own pieces.",
        href: "/chess-board",
        img: {
            src: '~/assets/images/chess-board.png',
            alt: 'computer graphic of a robot chess board'
        }
    },
    {
        name: "Resistor Sorter",
        description: "A computer-controlled robotic gantry to sort resistors into standing bins",
        href: "/resistor-sorter",
        img: {
            src: '~/assets/images/resistor-sorter.png',
            alt: 'small metal gantry with plastic drawers'
        }
    },
    {
        name: "Water Monitor",
        description: "Automated system to alert users if the water in a chicken feeder has reached refilling levels",
        href: "/water-monitor",
        img: {
            src: '~/assets/images/water-monitor.jpg',
            alt: 'large plastic jug with electronics attached to it'
        }
    },
]