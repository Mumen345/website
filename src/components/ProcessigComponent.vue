<template>
<div class="mt-5 bkg">
    <div class="p-4">
        <h1 class="container-title text-black">Here are features we’re proud of</h1>
    </div>

    <div class="gradient-cards containers">
        <div class="custom_cards">
            <div class="container-card bg-green-box" v-for="content in contents" :key="content.id">
               <img src="../assets/images/slant_arrow.svg" alt="">
                <h2 class="card-title">{{ content.header }}</h2>
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

                    header: "Payment Integration",
                    description: "Integrated payment options within the app to facilitate funding of wallets to complete trips, or pay for private network subscription.",
                },
                {
                    header: "Carpool Matching Algorithm",
                    description: " Intelligent matching algorithm that pairs riders with compatible car owners based on factors such as location, schedule, and network choice.",
                },
                {
                    header: "Ride Scheduling",
                    description: "Schedule rides in advance by specifying the date, time, and desired route. Increase your chance of finding a match.",
                },
                {
                    header: "Notifications",
                    description: "Receive notifications regarding ride requests, confirmations, updates, and reminders. This ensures timely communication throughout the carpooling process.",
                },

                {
                    header: "Referral Program",
                    description: " Refer and earn for every friend that joins Greach through your code.",
                },
                {
                    header: "High-Fidelity Verification",
                    description: " Verify your phone number, government ID, car details and employment to carpool with other working professionals.",
                },
                {
                    header: "Dashboards",
                    description: " Carpooling activities such as total rides, top drivers, total KM covered and total CO2 saved can be viewed on the private network’s dashboard.",
                },
                {
                    header: "Accrue and Redeem Points",
                    description: " When offering rides in the private network, car owners can build up points which can be instantly turned to cash in your wallet",
                },
                {
                    header: "Payout for Car owners",
                    description: "Car owners can withdraw money made on trips from their wallets to their bank account.",
                },
                {
                    header: "Rating and Reviews",
                    description: "Rate your carpooling experience. This helps in maintaining accountability and ensuring high-quality rides for all users.",
                },

            ]
        }
    }
}
</script>

<style lang="scss" scoped>
.bkg {
    background: #f9f9f9;
    padding-bottom: 70px;
}
.containers {
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
        grid-template-columns: auto auto;

    }

    @media screen and (max-width: 1100px) {
        grid-template-columns: auto;

    }

}
</style>
