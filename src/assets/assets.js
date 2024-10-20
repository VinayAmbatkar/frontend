import Booking_img from './Booking_img.png'
import header_img from './header_img.gif'
import group_profiles from './group_profiles.png'
import profile_pic from './profile_pic.png'
import contact_image from './contact_image.png'
import about_image from './about_image.png'
import logo from './logo.svg'
import dropdown_icon from './dropdown_icon.svg'
import menu_icon from './menu_icon.svg'
import cross_icon from './cross_icon.png'
import chats_icon from './chats_icon.svg'
import verified_icon from './verified_icon.svg'
import arrow_icon from './arrow_icon.svg'
import info_icon from './info_icon.svg'
import upload_icon from './upload_icon.png'
import stripe_logo from './stripe_logo.png'
import razorpay_logo from './razorpay_logo.png'
import doc1 from './doc1.png'
import doc2 from './doc2.png'
import doc3 from './doc3.png'
import doc4 from './doc4.png'
import doc5 from './doc5.png'
import doc6 from './doc6.png'
import doc7 from './doc7.png'
import doc8 from './doc8.png'
import doc9 from './doc9.png'
import doc10 from './doc10.png'

import Science from './Science.svg'
import Art_Museeeum from './Art_Museeeum.svg'
import History_Museum from './History _Museum.svg'
import Natural_History_Museum from './Natural History Museum.svg'


export const assets = {
    Booking_img,
    header_img,
    group_profiles,
    logo,
    chats_icon,
    verified_icon,
    info_icon,
    profile_pic,
    arrow_icon,
    contact_image,
    about_image,
    menu_icon,
    cross_icon,
    dropdown_icon,
    upload_icon,
    stripe_logo,
    razorpay_logo
}

export const specialityData = [
    {
        speciality: 'Art Museum',
        image: Art_Museeeum
    },
    {
        speciality: 'History Museum',
        image: History_Museum
    },
    {
        speciality: 'Natural History Museum',
        image:Natural_History_Museum
    },
    {
        speciality: 'Science Museum',
        image: Science
    },
   
]

export const Musseum = [
    {
        _id: 'doc1',
        name: 'The National Gallery',
        image: doc1,
        speciality: 'Art Museum',
        about: 'The National Gallery houses one of the greatest collections of paintings in the world, showcasing a range of Western European art from the 13th to the 19th centuries.',
        Tickets: 50,
        address: {
            line1: '17th Cross, Richmond',
            line2: 'Circle, Ring Road, London'
        }
    },
    {
        _id: 'doc2',
        name: 'The British Museum',
        image: doc2,
        speciality: 'History Museum',
        about: 'The British Museum is dedicated to human history, art, and culture, featuring a vast collection that spans over two million years of human history.',
        Tickets: 60,
        address: {
            line1: 'Great Russell St',
            line2: 'London WC1B 3DG, UK'
        }
    },
    {
        _id: 'doc3',
        name: 'The Natural History Museum',
        image: doc3,
        speciality: 'Natural History Museum',
        about: 'The Natural History Museum exhibits a vast range of specimens from various segments of natural history, famous for its dinosaur skeletons and interactive displays.',
        Tickets: 30,
        address: {
            line1: 'Cromwell Rd',
            line2: 'London SW7 5BD, UK'
        }
    },
    {
        _id: 'doc4',
        name: 'Science Museum',
        image: doc4,
        speciality: 'Science Museum',
        about: 'The Science Museum offers interactive exhibits on technology, innovation, and scientific advancements, making it a fascinating destination for visitors of all ages.',
        Tickets: 40,
        address: {
            line1: 'Exhibition Rd',
            line2: 'London SW7 2DD, UK'
        }
    },
    {
        _id: 'doc5',
        name: 'Victoria and Albert Museum',
        image: doc5,
        speciality: 'Art Museum',
        about: 'The Victoria and Albert Museum is the world’s leading museum of art, design, and performance, with a permanent collection of over 2.27 million objects.',
        Tickets: 50,
        address: {
            line1: 'Cromwell Rd',
            line2: 'London SW7 2RL, UK'
        }
    },
    {
        _id: 'doc6',
        name: 'Tate Modern',
        image: doc6,
        speciality: 'Art Museum',
        about: 'Tate Modern is Britain’s national gallery of international modern art, featuring works from artists such as Picasso, Warhol, and Rothko.',
        Tickets: 50,
        address: {
            line1: 'Bankside',
            line2: 'London SE1 9TG, UK'
        }
    },
    {
        _id: 'doc7',
        name: 'Imperial War Museum',
        image: doc7,
        speciality: 'History Museum',
        about: 'The Imperial War Museum tells the stories of those whose lives have been shaped by conflict, from World War I to the present day.',
        Tickets: 50,
        address: {
            line1: 'Lambeth Rd',
            line2: 'London SE1 6HZ, UK'
        }
    },
    {
        _id: 'doc8',
        name: 'Museum of London',
        image: doc8,
        speciality: 'History Museum',
        about: 'The Museum of London documents the history of London from prehistoric times to the present, offering interactive exhibits on the city’s rich heritage.',
        Tickets: 60,
        address: {
            line1: '150 London Wall',
            line2: 'London EC2Y 5HN, UK'
        }
    },
    {
        _id: 'doc9',
        name: 'Natural History Museum',
        image: doc9,
        speciality: 'Natural History Museum',
        about: 'The Natural History Museum in London is world-renowned for its vast range of specimens and famous dinosaur skeletons.',
        Tickets: 30,
        address: {
            line1: 'Cromwell Rd',
            line2: 'London SW7 5BD, UK'
        }
    },
    {
        _id: 'doc10',
        name: 'Science Museum',
        image: doc10,
        speciality: 'Science Museum',
        about: 'The Science Museum offers captivating exhibits on technology, innovation, and scientific progress.',
        Tickets: 40,
        address: {
            line1: 'Exhibition Rd',
            line2: 'London SW7 2DD, UK'
        }
    }
]    