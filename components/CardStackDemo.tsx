"use client";
import { cn } from "@/utils/cn";
import {CardStack} from "@/components/ui/card-stack";
export function CardStackDemo() {
    return (
        <div className="h-[25rem] flex items-center justify-center w-full">
            <CardStack items={CARDS} />
        </div>
    );
}

// Small utility to highlight the content of specific section of a testimonial content
export const Highlight = ({
                              children,
                              className,
                          }: {
    children: React.ReactNode;
    className?: string;
}) => {
    return (
        <span
            className={cn(
                "font-bold bg-emerald-100 text-emerald-700 dark:bg-emerald-700/[0.2] dark:text-emerald-500 px-1 py-0.5",
                className
            )}
        >
      {children}
    </span>
    );
};

const CARDS = [
    {
        id: 0,
        name: "Wayou Wilfried",
        designation: "Software Architect",
        content: (
            <p>
                These cards are amazing, <Highlight>I want to use them</Highlight> in my
                project. Framer motion is a godsend ngl tbh fam 🙏
            </p>
        ),
    },
    {
        id: 1,
        name: "Kwamou Steacy",
        designation: "Mobile developer",
        content: (
            <p>
                I dont like this Twitter thing,{" "}
                <Highlight>deleting it right away</Highlight> because yolo. Instead, I
                would like to call it <Highlight>X.com</Highlight> so that it can easily
                be confused with adult sites.
            </p>
        ),
    },
    {
        id: 2,
        name: "Foyang Etienne",
        designation: "Software engineer",
        content: (
            <p>
                The first rule of
                <Highlight>Fight Club</Highlight> is that you do not talk about fight
                club. The second rule of
                <Highlight>Fight club</Highlight> is that you DO NOT TALK about fight
                club.
            </p>
        ),
    },
];
