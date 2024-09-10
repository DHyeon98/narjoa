import { PropsWithChildren } from 'react';

interface IntroduceSectionType extends PropsWithChildren {
  title: string;
}

export default function IntroduceSectionCard({ title, children }: IntroduceSectionType) {
  return (
    <section className="introduce-bg w-1/2 max-lg:w-full">
      <h3 className="introduce-title">{title}</h3>
      <div className="max-w-[516px] mx-auto rounded-2xl max-lg:max-w-full">{children}</div>
    </section>
  );
}

function ImageBox({ children }: PropsWithChildren) {
  return <div className="h-72 max-md:h-56">{children}</div>;
}

function TextBox({ children, title }: IntroduceSectionType) {
  return (
    <div className="break-keep mt-3">
      <strong className="inline-block text-lg mb-1 max-md:text-base max-md:mb-0">{title}</strong>
      <div className="max-md:text-sm">{children}</div>
    </div>
  );
}

IntroduceSectionCard.ImageBox = ImageBox;
IntroduceSectionCard.TextBox = TextBox;
