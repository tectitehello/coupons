<template>
    <div class="modal">
        <div class="main">
            <label>Enter Coupon</label>
            <select>
                <option>
                    Red Robin
                </option>
                <option>
                    Outbacks
                </option>
                <option>
                    Evergreens
                </option>
            </select>
            <input type="text">
            <input type="text">
            <button>Add</button>
        </div>
    </div>
</template>

<style scoped>
.modal {
    position: fixed;
    width: 40rem;
    height: 40rem;
    top: calc(50% - 20rem);
    left: calc(50% - 20rem);
    background-color: #2c2c2c;
    box-shadow: 0px 8px 32px 0px #000000;
}
.main {
    padding: 1rem;
    display: flex;
    flex-direction: column;
    font-size: 2.5rem;
    gap: .5rem;
    height: 100%;
    box-sizing: border-box;
}
input,select {
    font-size: 2rem;
}
button {
    margin-top: auto;
}
</style>