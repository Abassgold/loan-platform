export interface navtypes{
        href: string
        child: string
}
export const navLinks:navtypes[] = [
    { href: "/", child: "Home" },
    { href: "/about-us", child: "About Us" },
    { href: "/contact-us", child: "Contact Us" },
    { href: "/courses", child: "FAQ" },
    // { href: "#reviews", child: "Review" },
];