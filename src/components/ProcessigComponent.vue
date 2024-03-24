<template>
<div class="mt-5">
    <div class="p-4">
        <h1 class="container-title text-black">Here are features we’re proud of</h1>
    </div>

    <div class="gradient-cards">
        <div class="custom_cards">
            <div class="container-card bg-green-box" v-for="content in contents" :key="content.id">
                <svg width="60" height="60" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <rect x="1" y="1" width="118" height="118" rx="24" fill="url(#paint0_linear_1366_4547)" fill-opacity="0.15" stroke="url(#paint1_radial_1366_4547)" stroke-width="2"></rect>
                    <path d="M33.2182 61.4C33.2182 75.425 37.2682 86.75 51.5932 86.75C65.9182 86.75 69.8182 75.425 69.8182 61.4C69.8182 47.225 65.9182 35.9 51.5932 35.9C37.2682 35.9 33.2182 47.225 33.2182 61.4ZM43.7182 61.4C43.7182 53.075 45.5932 46.1 51.5932 46.1C57.5182 46.1 59.3182 53.075 59.3182 61.4C59.3182 69.65 57.5182 76.55 51.5932 76.55C45.5932 76.55 43.7182 69.65 43.7182 61.4Z" fill="#54E8A9"></path>
                    <path d="M87.7143 36.35L78.0543 56H80.1243L89.7843 36.35H87.7143ZM74.6943 40.16C74.6943 42.44 76.4043 44.15 78.6843 44.15C80.9343 44.15 82.7043 42.44 82.7043 40.16C82.7043 37.91 80.9343 36.14 78.6843 36.14C76.4043 36.14 74.6943 37.91 74.6943 40.16ZM77.1243 40.16C77.1243 39.29 77.7543 38.57 78.6843 38.57C79.5543 38.57 80.2743 39.29 80.2743 40.16C80.2743 41.09 79.5543 41.72 78.6843 41.72C77.7543 41.72 77.1243 41.09 77.1243 40.16ZM85.3143 52.31C85.3143 54.59 87.0243 56.3 89.3043 56.3C91.5543 56.3 93.3243 54.59 93.3243 52.31C93.3243 50.06 91.5543 48.29 89.3043 48.29C87.0243 48.29 85.3143 50.06 85.3143 52.31ZM87.7443 52.31C87.7443 51.44 88.3743 50.72 89.3043 50.72C90.1743 50.72 90.8943 51.44 90.8943 52.31C90.8943 53.24 90.1743 53.87 89.3043 53.87C88.3743 53.87 87.7443 53.24 87.7443 52.31Z" fill="#2FCB89"></path>
                    <defs>
                        <linearGradient id="paint0_linear_1366_4547" x1="0.0063367" y1="0.168432" x2="120.853" y2="119.009" gradientUnits="userSpaceOnUse">
                            <stop stop-color="#2FCB89" stop-opacity="0.7"></stop>
                            <stop offset="0.489583" stop-color="#2FCB89" stop-opacity="0"></stop>
                            <stop offset="1" stop-color="#2FCB89" stop-opacity="0.7"></stop>
                        </linearGradient>
                        <radialGradient id="paint1_radial_1366_4547" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(60 60) rotate(96.8574) scale(122.674 149.921)">
                            <stop stop-color="#54E8A9"></stop>
                            <stop offset="1" stop-color="#1A3E31" stop-opacity="0.2"></stop>
                        </radialGradient>
                    </defs>
                </svg>
                
                <h2 class="card-title mt-3">{{ content.header }}</h2>
                <p class="card-description">{{ content.description }}</p>
            </div>
        </div>
    </div>
</div>
</template>

<script>
export default {
    data() {
        return {
            contents: [{

                    header: "User Profile",
                    description: " Allow users to create profiles with information such as their name, photo, and preferred pickup/dropoff locations. This helps match users with compatible carpool partners.",
                },
                {
                    header: "Ride Scheduling",
                    description: "Enable users to schedule rides in advance, specifying the date, time, and desired route. This feature ensures timely pickups and dropoffs for both drivers and passengers.",
                },
                {
                    header: "Real-Time Tracking",
                    description: "Provide real-time tracking of rides, allowing users to monitor the location of their driver or fellow passengers. This feature enhances safety and provides peace of mind during the journey.",
                },
                {
                    header: "Payment Integration",
                    description: "Integrate payment options within the app to facilitate seamless transactions between drivers and passengers. This could include options for cashless payments, split payments among passengers, and fare estimation.",
                },

                {
                    header: "Rating and Reviews",
                    description: " Allow users to rate their carpooling experience and leave reviews for drivers and passengers. This helps maintain accountability and ensures high-quality rides for all users.",
                },
                {
                    header: "Carpool Matching Algorithm",
                    description: " Implement an intelligent matching algorithm that pairs users with compatible carpool partners based on factors such as location, schedule, and user preferences.",
                },
                {
                    header: "Notifications",
                    description: "Send notifications to users regarding ride requests, confirmations, updates, and reminders. This keeps users informed and ensures timely communication throughout the carpooling process.",
                },
                {
                    header: "Emergency Assistance",
                    description: " Include a feature for users to contact emergency services or report safety concerns during a ride. This feature prioritizes user safety and provides quick assistance when needed.",
                },
                {
                    header: "Carpooling Rewards Program",
                    description: "Offer incentives or rewards for frequent carpoolers, such as discounts on future rides, loyalty points, or environmental rewards for reducing carbon emissions.",
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.container {
    width: 1200px !important;
    padding: 0 !important;
    margin-right: auto;
    margin-left: auto;

    @media screen and (min-width: 992px) and (max-width: 1439px) {
        max-width: 1279px !important;
        padding: 0 !important;
        margin: 0 80px !important;
        width: auto !important;
    }

    @media screen and (max-width: 991px) {
        max-width: 959px !important;
        margin: 0 16px !important;
        padding: 0 !important;
        width: auto !important;
    }
}

.gradient-cards {
    display: flex;
    flex-direction: row;
    gap: 20px;
    padding: 30px;

    @media screen and (max-width: 991px) {
        grid-template-columns: 1fr;
    }

    @media screen and (max-width: 500px) {
        padding: 15px;

    }
}

.container-title {
    text-align: center;
    font-weight: 600;
    line-height: 60px;
    font-family: ClashDisplay;
    font-size: 3rem;
    line-height: 92px;

    @media screen and (max-width: 991px) {
        font-size: 2.7rem;
        line-height: 3rem;
    }

    @media screen and (max-width: 500px) {
        font-size: 2rem;
        line-height: 3rem;
    }
}

.container-card {
    position: relative;
    border: 1px solid #e9e9e9;
    border-radius: 45px;
    padding: 30px;

    @media screen and (max-width: 835px) {
        width: 100%;
    }

    img {
        margin-bottom: 32px;
    }

    @media screen and (max-width: 500px) {
        padding: 20px;

    }
}

.bg-green-box,
.bg-white-box,
.bg-yellow-box,
.bg-blue-box {
    position: relative;
}

.bg-green-box::after,
.bg-white-box::after,
.bg-yellow-box::after,
.bg-blue-box::after {
    position: absolute;
    top: -1px;
    bottom: -1px;
    left: -1px;
    right: -1px;
    content: "";
    z-index: -1;
    border-radius: 45px;
}

.card-title {
    font-weight: 800;
    font-family: ExoBold;
    line-height: 40px;
    font-style: normal;
    font-size: 24px;
    padding-bottom: 8px;

    @media screen and (max-width: 500px) {
        font-size: 1.5rem;
        line-height: 3rem;
    }
}

.card-description {
    font-weight: 600;
    line-height: 32px;
    color: #404044;
    font-size: 14px;
}

.custom_cards {
    display: grid;
    grid-template-columns: auto auto auto;
    gap: 20px;
    @media screen and (max-width: 1100px) {
        grid-template-columns: auto auto ;
        
    }
    @media screen and (max-width: 1100px) {
        grid-template-columns: auto  ;

    }

}
</style>
