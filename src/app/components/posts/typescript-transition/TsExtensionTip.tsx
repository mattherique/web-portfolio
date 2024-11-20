import React, { useEffect } from 'react';
import { annotate } from 'rough-notation';

const TsExtensionTip = () => {
    useEffect(() => {
    const element = document.querySelector('#myElement') as HTMLElement;
    if (element) {
      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            const annotation = annotate(entry.target as HTMLElement, { type: 'underline' });
            annotation.show();
            observer.unobserve(entry.target); // Stop observing after the annotation is shown
          }
        });
      });

      observer.observe(element);
    }
  }, []);

    return (
        <p className="text-xl text-gray-600">
            Sometimes TypeScript is not very clear when dealing with type errors, 
            especialy if the logic is more complex, 
            vscode has a tool that can help to visualize more clearly the problem called 
            <a id="ts-extension" 
                className="text-red-600 cursor-pointer" 
                onClick={() => window.open('https://github.com/yoavbls/pretty-ts-errors')}
            >Pretty TypeScript Errors</a>
        </p>
    );
};

export default TsExtensionTip;