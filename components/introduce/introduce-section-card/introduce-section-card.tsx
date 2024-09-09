import { PropsWithChildren } from 'react';

interface IntroduceSectionType extends PropsWithChildren {
  title: string;
}

export default function IntroduceSectionCard({ title, children }: IntroduceSectionType) {
  return (
    <section className="introduce-bg w-1/2">
      <h3 className="text-center text-xl font-bold mb-8">{title}</h3>
      <div className=" px-8 rounded-2xl">{children}</div>
    </section>
  );
}

function ImageBox({ children }: PropsWithChildren) {
  return <div className="h-72">{children}</div>;
}

function TextBox({ children, title }: IntroduceSectionType) {
  return (
    <div className="break-keep mt-3">
      <strong className="inline-block text-lg mb-1">{title}</strong>
      {children}
    </div>
  );
}

IntroduceSectionCard.ImageBox = ImageBox;
IntroduceSectionCard.TextBox = TextBox;
