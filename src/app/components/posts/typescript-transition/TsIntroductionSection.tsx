import React, { useEffect } from 'react';
import { annotate } from 'rough-notation';

const TsIntroductionSection = () => {
    useEffect(() => {
        const element = document.querySelector('#codebase') as HTMLElement;
        console.log(element)
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tsExtensionElement = annotate(entry.target as HTMLElement, { type: 'box', color: '#ff7575' });

                tsExtensionElement.show()
                observer.unobserve(entry.target); // Stop observing after the annotation is shown
            }
            });
        });

        observer.observe(element);
    }, []);

    return (
        <section>
            <h3 className="text-black text-2xl mb-2">Introduction:</h3>
            <div className='flex flex-col gap-y-4'>
                <p className="text-xl text-gray-600">{"TypeScript has become increasingly popular in the developer community due to the robustness it adds to your code. With features like static typing, interfaces, and type annotations, it’s especially valuable for managing large codebases. TypeScript enables developers to precisely define the structure of objects and function parameters, leading to code that's more readable and easier to maintain. But what if you’ve already started your project in JavaScript? How can you incorporate TypeScript into an existing codebase?"}</p>
                <p className="text-xl text-gray-600">
                    It seams very tricky, but here you will learn how to make this transition from the beginning <span className="text-xl text-gray-600 whitespace-nowrap" id="codebase">without interfere in you actual codebase.</span></p>
            </div>
        </section>
    );
};

export default TsIntroductionSection;