function handleScrollCardAnimation(value){
    
    const foodCardElement = document.getElementById(value);
    //! USING setTimeout function for executing srollIntoView because it wont work without it in mobile devices

    setTimeout(() => {
        const elementPosition =
        foodCardElement.getBoundingClientRect().top;
        const offset = elementPosition - 200;
        window.scrollTo({
            top: offset,
            behavior: "smooth",
        });
    }, 100);
    foodCardElement.classList.add(
        "shadow-xl",
        "scale-105",
        "dark:bg-emerald-800",
        "border-emerald-500",
        "dark:shadow-zinc-800",
        "animate-pulse",
        "bg-emerald-100",
        "border-2",
        "dark:border-emerald-500"
    );
    const handleHoverEffectElement = document.createElement("div");
    handleHoverEffectElement.id = "handle-hover-effect-element";
    handleHoverEffectElement.classList.add(
        "fixed",
        "w-[100vw]",
        "h-[100vh]",
        "top-0",
        "left-0",
        "z-[100]",
        "bg-transparent"
    );
    document.body.appendChild(handleHoverEffectElement);
    
    
    
    setTimeout(() => {
        document.querySelector("#handle-hover-effect-element").remove();
        foodCardElement.classList.remove(
            "shadow-xl",
            "scale-105",
            "dark:bg-emerald-800",
            "border-emerald-500",
            "dark:shadow-zinc-800",
            "animate-pulse",
            "bg-emerald-100",
            "border-2",
            "dark:border-emerald-500"
            // "dark:bg-emerald-900"
        );
    }, 2500);
}


export {
    handleScrollCardAnimation
}