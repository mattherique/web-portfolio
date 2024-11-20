'use client'

import React, { useEffect } from 'react';
import { annotate, annotationGroup } from 'rough-notation';

const TsExtensionTipSection = () => {
    useEffect(() => {
        const element = document.querySelector('#ts-extension') as HTMLElement;
        const viewClearElement = annotate(document.querySelector('#view-clear') as HTMLElement, { type: 'highlight', color: '#c8ebff' });
        const typeErrorElement = annotate(document.querySelector('#type-error') as HTMLElement, { type: 'highlight', color: '#f5c8ff' });
        const helpElement = annotate(document.querySelector('#help-txt') as HTMLElement, { type: 'highlight', color: '#fffcc8' });

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
            if (entry.isIntersecting) {
                const tsExtensionElement = annotate(entry.target as HTMLElement, { type: 'underline', color: '#ff9999' });
                const ag = annotationGroup([
                    tsExtensionElement,
                    viewClearElement,
                    typeErrorElement,
                    helpElement
                ]);
                ag.show()
                observer.unobserve(entry.target); // Stop observing after the annotation is shown
            }
            });
        });

        observer.observe(element);
    }, []);

    return (
        <p className="text-xl text-gray-600 ">
            TypeScript can sometimes be unclear when it comes to <span className='whitespace-nowrap' id="type-error">type errors, </span>, 
            especially in complex logic. To <span className='whitespace-nowrap' id="view-clear">make things easier</span>, VSCode offers a tool called
            <a id="ts-extension" 
                className="text-[#ff9999] cursor-pointer whitespace-nowrap" 
                onClick={() => window.open('https://github.com/yoavbls/pretty-ts-errors')}
            > Pretty TypeScript Errors</a> which helps<span className='whitespace-nowrap' id="help-txt"> more clearly</span>. This tool enhances the error messages, making it easier to understand what’s going wrong in your code.
        </p>
    );
};

export default TsExtensionTipSection;