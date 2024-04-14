<template>
    <div class="entire_container">
        <section class="accordion accordion--radio">
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
                        questions: "Where can i download the GREACH app?",
                        text: "Greach app is available on Google Playstore and Apple IOS. It is free to download and easy to use right away!",
                    },
                    {
                        for: "rd2",
                        identity: "rd2",
                        questions: "How secure am I using this App?",
                        text: "Safety of users is paramount to us at Greach. Your safety/security is highly guaranteed as both the drivers and riders/co-riders have been verified and screened. Additionally, during a trip, users (rider/driver) can activate the safety feature (emergency button) whenever there is a perceived threat. Our process flow is designed to protect both parties in the case of a false alarm.",
                    },
                    {
                        for: "rd3",
                        identity: "rd3",
                        questions: "I'm new to GREACH, what do I do?",
                        text: "After downloading the app, users are expected to sign up by following the simple steps: Registration All users regardless of role/function (rider, driver, organizer) have a similar registration and verification process. Some users may require further verification depending on function. After signing up, the user is required to set up his/her profile and go through ID/Biometric verification.Users can register through below channels: Verification ID Verification: Matches Name and Phone Number."
                    },
                    {
                        for: "rd4",
                        identity: "rd4",
                        questions: "How do I search for a ride?",
                        text: "Rider Requests Trip -> Driver Receives Match Request -> Driver Accepts/Rejects Request -> Match Confirmation Sent to Rider ->Driver Picks up Rider -> Trip Starts -> Driver Drops off Rider Trip requests are sent to the server to match riders to drivers. Once there is a match, the driver receives a “match request” with the rider (name, picture, network match) and trip (pickup/drop-off location, eta/detour time) information. Driver accepts/rejects the trip. If the driver accepts, the driver (car details, name, picture, network match) and trip (eta) information is sent to the rider. Trip is then started. Driver Availability Feature A driver can pick up multiple riders along the way. A driver can also indicate “no longer available for pickup” at any time even when there are still seats available. Greach will continue to match riders to a driver as long as the driver’s status is “available” and there are seats available.",
                    },
    
                    {
                        for: "rd6",
                        identity: "rd6",
                        questions: "How secure is my data?",
                        text: "Greach assures all users of total security of the data stored on their profiles during registration or update of their profile at any point. Our highly secured system infrastructure has also been optimized to ensure that no third-party infringement occurs on your data.",
                    },
                    {
                        for: "rd7",
                        identity: "rd7",
                        questions: "How is a trip priced?",
                        text: "Greach pricing uses a wallet system where users pre-fund their wallet from their bank/card. Riders are shown a billing estimate upon requesting a trip. This estimate is based on distance/time to get the rider to their destination. Our app is configured such that users have enough in their wallet to cover this bill estimate. The final bill will be different from the estimate. As the trip progresses the bill estimate is adjusted. As more riders join the trip, the bill for individual riders is reviewed. When the trip ends, the rider is sent a second (final) bill and payment is made automatically from the wallet.",
                    },
                    {
                        for: "rd8",
                        identity: "rd8",
                        questions: "How do I pay for my ride?",
                        text: "Greach pricing uses a wallet system where users pre-fund their wallet from their bank/card. Riders are shown a billing estimate upon requesting a trip. This estimate is based on distance/time to get the rider to their destination. Our app is configured such that users have enough in their wallet to cover this bill estimate The final bill will be different from the estimate. As the trip progresses the bill estimate is adjusted. As more riders join the trip, the bill for individual riders is reviewed. When the trip ends, the rider is sent a second (final) bill and payment is made automatically from the wallet.",
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
        background: #f5f5f5;
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
        background-color: #ffffff;
        padding-top: 70px;
        padding-bottom: 10px;
        width: 70%;
        margin: 60px auto;
    }
    
    @keyframes bounce {
        25% {
            transform: rotate(90deg) translate(.25rem);
        }
    
        75% {
            transform: rotate(90deg) translate(-.25rem);
        }
    }
@media screen and (max-width: 1020px) {
    .entire_container {
        background-color: #ffffff;
        padding-top: 70px;
        padding-bottom: 10px;
        width: 100%;
        margin: 0 auto;
    }
}
    </style>
    