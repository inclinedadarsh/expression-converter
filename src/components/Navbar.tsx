import { Github, Twitter } from "lucide-react";

import { buttonVariants } from "./ui/button";

const Navbar = () => {
    return (
        <nav className='flex view-container justify-between items-center py-4'>
            <h1 className='text-lg font-semibold'>Expression Converter</h1>
            <ul className='flex gap-4 items-center'>
                <li>
                    <a
                        className={buttonVariants({
                            variant: "outline",
                            size: "icon",
                        })}
                        href='https://github.com/inclinedadarsh/expression-converter'
                    >
                        <Github size={18} />
                    </a>
                </li>
                <li>
                    <a
                        className={buttonVariants({
                            variant: "outline",
                            size: "icon",
                        })}
                        href='https://twitter.com/inclinedadarsh'
                    >
                        <Twitter size={18} />
                    </a>
                </li>
                <li>
                    <a
                        className={buttonVariants({})}
                        href='https://github.com/inclinedadarsh/expression-converter'
                    >
                        Join my community
                    </a>
                </li>
            </ul>
        </nav>
    );
};

export default Navbar;
