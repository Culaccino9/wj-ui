<template>
    <div 
        class="main"
        :style="{width:`${width}px`,height:`${height}px`}"
    >
    </div>
</template>

<script>
    export default {
        name:"wj-water",
        props:{
            width:{type:String || Number,default:"300"},
            height:{type:String || Number,default:"300"},
        }
    }
</script>

<style lang="less" scoped>
.main {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    box-sizing: border-box;
    border-radius: 50%;
    background: transparent;
    box-shadow: inset 10px 20px 30px rgba(0, 0, 0, 0.5), 10px 10px 20px rgba(0, 0, 0, 0.3), 15px 15px 30px rgba(0, 0, 0, 0.05), inset -10px -10px 15px rgba(255, 255, 255, 0.8);
    animation: move 6s linear infinite;
}

.main::after {
    position: absolute;
    content: "";
    width: 10%;
    height: 10%;
    background: rgba(255, 255, 255, 0.5);
    left: 20%;
    top: 20%;
    border-radius: 50%;
    animation: move2 6s linear infinite;
    filter:blur(1px);
}

.main::before {
    position: absolute;
    content: "";
    width: 5%;
    height: 5%;
    background: rgba(255, 255, 255, 0.5);
    left: 32.5%;
    top: 17.5%;
    border-radius: 50%;
    animation: move3 6s linear infinite;
    filter:blur(1px);
}

@keyframes move {
    50% {
        border-radius: 30% 70% 70% 30% / 30% 30% 70% 70%;
    }
    75% {
        border-radius: 74% 26% 70% 30% / 78% 76% 24% 22%;
    }
    25% {
        border-radius: 51% 49% 43% 57% / 43% 68% 32% 57%;
    }
}

@keyframes move2 {
    50% {
        left: 15%;
        top: 20%;
    }
    75% {
        left: 20%;
        top: 30%;
    }
    25% {
        left: 12.5%;
        top: 30%;
    }
}

@keyframes move3 {
    50% {
        left: 27.5%;
        top: 18.7%;
    }
    75% {
        left: 27.5%;
        top: 25%;
    }
    25% {
        left: 25%;
        top: 22.5%;
    }
}
</style>