let user_score=0;
let com_score=0;

const choice= document.querySelectorAll(".image");

choice.forEach((image) =>
{
    image.addEventListener("click", () =>
    {
        const user_choice=image.getAttribute("id");
        console.log("It is clicked",user_choice);
    })
}
)