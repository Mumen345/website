<template>
<div class="entire_container">
    <section class="container accordion accordion--radio">
        <div class="tab" v-for="question in questions" :key="question.id">
            <input type="radio" name="accordion-2" :id="question.identity">
            <label :for="question.for" class="tab__label">{{ question.questions }}
            </label>
            <div class="tab__content">
                <p>{{ question.text }}</p>
            </div>
        </div>
    </section>
</div>
</template>

<script>
export default {
    data() {
        return {
            questions: [{
                    for: "rd1",
                    identity: "rd1",
                    questions: "What makes BookTime great for managing visitors?",
                    text: "BookTime simplifies visitor management with automated check-ins, easy appointment scheduling, and smooth communication.",
                },
                {
                    for: "rd2",
                    identity: "rd2",
                    questions: "Can I customize BookTime for my business needs?",
                    text: "Absolutely! BookTime is flexible, letting you customize it to match your brand and how you operate.",
                },
                {
                    for: "rd3",
                    identity: "rd3",
                    questions: "How does BookTime keep my data safe?",
                    text: "Your data is secure with BookTime. We've got strong measures in place to keep everything safe.",
                },
                {
                    for: "rd4",
                    identity: "rd4",
                    questions: "How does the WhatsApp feature help staff communicate better?",
                    text: "BookTime's WhatsApp feature lets staff chat with receptionists, making it easy to share availability and manage visitor wait times.",
                },

                {
                    for: "rd6",
                    identity: "rd6",
                    questions: "How do I set up automated appointments with BookTime?",
                    text: "It's a breeze! BookTime's automated appointment setup is user-friendly, saving you time.",
                },
                {
                    for: "rd7",
                    identity: "rd7",
                    questions: "Can staff easily update their availability?",
                    text: "Definitely! Staff can tell the receptionist their availability through BookTime's WhatsApp, making updates quick.",
                },
                {
                    for: "rd8",
                    identity: "rd8",
                    questions: "What kind of help does BookTime offer if I get stuck?",
                    text: "BookTime's got your back! Reach out to our support team, or check out FAQs and guides for easy self-help.",
                },
                {
                    for: "rd9",
                    identity: "rd9",
                    questions: " Is there a free trial for BookTime?",
                    text: "Yes! You can try BookTime for free to see how it fits your needs.",
                },
                {
                    for: "rd10",
                    identity: "rd10",
                    questions: "How do I get started with BookTime in my workplace?",
                    text: "Easy peasy! Sign up, follow our simple onboarding, and start using BookTime to manage visitors hassle-free.",
                },

            ]
        }
    },
}
</script>

<style lang="scss" scoped>


.tab input {
    position: absolute;
    opacity: 0;
    z-index: -1;
}

.tab__content {
    max-height: 0;
    overflow: hidden;
    transition: all 0.35s;
}

.tab input:checked~.tab__content {
    max-height: 10rem;
}

/* Visual styles */
.accordion {
    overflow: hidden;
    margin-bottom: 100px;
}

p {
    font-size: 18px;
}

.tab__label,
.tab__close {
    display: flex;
    background: #ffffff;
    cursor: pointer;
    color: #353535;
    font-family: ExoMedium;
    font-size: 16px;
    margin-bottom: 20px;
    border-radius: 10px;
}

p {
    font-family: NunitoMedium;
}

.tab__label {
    justify-content: space-between;
    padding: 1rem;
}

.tab__label::after {
    content: "\276F";
    width: 1em;
    height: 1em;
    text-align: center;
    transform: rotate(90deg);
    transition: all 0.35s;
}

.tab input:checked+.tab__label::after {
    transform: rotate(270deg);
}

.tab__content p {
    margin: 0;
    padding: 1rem;
    font-size: 14px;
    font-family: ExoMedium;
}

.tab__close {
    justify-content: flex-end;
    padding: 0.5rem 1rem;
    font-size: 0.75rem;
}

.accordion--radio {
    --theme: var(--secondary);
}

/* Arrow animation */
.tab input:not(:checked)+.tab__label:hover::after {
    animation: bounce .5s infinite;
}

.entire_container {
    background-color: #f5f5f5;
    padding-top: 50px;
    padding-bottom: 10px;
    margin-top: 60px;
    width: 100%;
}

@keyframes bounce {
    25% {
        transform: rotate(90deg) translate(.25rem);
    }

    75% {
        transform: rotate(90deg) translate(-.25rem);
    }
}
</style>
