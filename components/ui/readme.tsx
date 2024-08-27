import React from "react";

const DeveloperNote: React.FC = () => {
  return (
    <div className=" sm:w-11/12 backdrop:blur-md z-50 bg-Bl border border-white dark:border-white/[0.2] text-gray-400 p-4 rounded-lg">
      <p className="font-bold text-white text-lg mb-2">Readme.md</p>
      <pre className="font-mono text-pretty text-md whitespace-pre-wrap">
        {`
This website was developed due to the sheer frustation of me not being able to find notes for technical subjects. I plan to scale it even bigger and include all subjects of all classes and be a direct competitor of sites like NepalEnotes.

I bid my respect and thanks to the contributors who provided me with their notes.You can also become a contributer by sharing your notes with us. Details  on how to do it are given below. I assure you all, this site will not be asking for direct payment of any kind but any help is appreciated.(*Donate Button Coming Soon*)

Made With

-NextJS
-Aceternity Component Library
-ShadCn Component Library
-Claude by Anthropic
-Framer Motion
-FontAwesome icon library
-Lucide Icons 
-Tailwind Css
-EmailJS

Developed Solely By Sumit Pokhrel
-_Dev Notes_-
This is the first time i've worked with React framework. Must say, it was a rough start. But well, Im happy that it turned out just fine. Next target is AngularJS.

 How To Contribute
 File Restrictions: 
# Must be .pdf file type of less than 30mb of file size.
# File must be readable under all conditions. Good Handwriting and clear picture quality are appreciated
File can be shared to the developer by contacting through E-mail, Instagram, Whatsapp or Messenger.(File Upload Button Coming Soon) 

Naming Conventions:-
Lighthouse: Alpha build
Aurora: Alpha.1
Nox: Beta Build 
Twilight: Test Build [We are here]
Daybreak: Feature updates
Odessey: Test & Feature additions
Dawn: Final Build
`}
      </pre>
    </div>
  );
};

export default DeveloperNote;
