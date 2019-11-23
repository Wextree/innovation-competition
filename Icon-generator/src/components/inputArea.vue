<template>
  <div>
    <div class="inputWrapper">
      <div class="inputCheckBox">

        <!--前6个-->
        <div class="color-box">
          <div class="red wrapper">
            <input
              type="checkbox"
              name="red"
              @click="clickRed"
              />
            </div>
          <div class="orange wrapper">
            <input
              type="checkbox"
              name="orange"
              @click="clickOrange"
            />
          </div>
          <div class="yellow wrapper">
            <input
              type="checkbox"
              name="yellow"
              @click="clickYellow"
            />
          </div>
          <div class="green wrapper">
            <input
              type="checkbox"
              name="green"
              @click="clickGreen"
            />
          </div>
          <div class="cyan wrapper">
            <input
              type="checkbox"
              name="cyan"
              @click="clickCyan"
            />
          </div>
          <div class="blue wrapper">
            <input
              type="checkbox"
              name="blue"
              @click="clickBlue"
            />
          </div>  
        </div>
    
        <!--后6个-->
        <div class="color-box">
          <div class="purple wrapper">
            <input
              type="checkbox"
              name="purple"
              @click="clickPurple"
            />
          </div>
          <div class="gray wrapper">
            <input
              type="checkbox"
              name="gray"
              @click="clickGray"
            />
          </div>
          <div class="pink wrapper">
            <input
              type="checkbox"
              name="pink"
              @click="clickPink"
            />
          </div>
          <div class="black wrapper">
            <input
              type="checkbox"
              name="black"
              @click="clickBlack"
            />
          </div>
          <div class="white wrapper">
            <input
              type="checkbox"
              name="white"
              @click="clickWhite"
            />
          </div>
          <div class="brown wrapper">
            <input
              type="checkbox"
              name="brown"
              @click="clickBrown"
            />
          </div>
        </div>

      </div>
      <div class="inputScope">
        <input
          type="number"
          name="label"
          min="0"
          max="63"
          ref="scope"
          placeholder="0~63"
        />
      </div>
      <div>
        <button @click="handleInput">提交</button>
      </div>
    </div>
  </div>
</template>

<script>
// red orange yellow green cyan blue purple gray pink black white brown
export default {
  name: 'InputArea',
  data () {
    return {
      red: 0,
      orange: 0,
      yellow: 0,
      green: 0,
      cyan: 0,
      blue: 0,
      purple: 0,
      gray: 0,
      pink: 0,
      black: 0,
      white: 0,
      brown: 0,
      data: {
        color12: '',
        scope: null
      }
    }
  },
  methods: {
    handleInput: function () {
      this.data.scope = this.$refs.scope.value
      if (this.data.scope >= 0 && this.data.scope <= 63) {
        this.data.color12 = this.red + ',' +
        this.orange + ',' + this.yellow + ',' + this.green +
        ',' + this.cyan + ',' + this.blue + ',' + this.purple +
        ',' + this.gray + ',' + this.pink + ',' + this.black +
        ',' + this.white + ',' + this.brown
        this.$emit('submit', this.data)
      } else {
        alert('请确保数值在0~63的范围')
      }
    },
    clickRed: function () {
      this.red = this.red === 1 ? 0 : 1
    },
    clickOrange: function () {
      this.orange = this.orange === 1 ? 0 : 1
    },
    clickYellow: function () {
      this.yellow = this.yellow === 1 ? 0 : 1
    },
    clickGreen: function () {
      this.green = this.green === 1 ? 0 : 1
    },
    clickCyan: function () {
      this.cyan = this.cyan === 1 ? 0 : 1
    },
    clickBlue: function () {
      this.blue = this.blue === 1 ? 0 : 1
    },
    clickPurple: function () {
      this.purple = this.purple === 1 ? 0 : 1
    },
    clickGray: function () {
      this.gray = this.gray === 1 ? 0 : 1
    },
    clickPink: function () {
      this.pink = this.pink === 1 ? 0 : 1
    },
    clickBlack: function () {
      this.black = this.black === 1 ? 0 : 1
    },
    clickWhite: function () {
      this.white = this.white === 1 ? 0 : 1
    },
    clickBrown: function () {
      this.brown = this.brown === 1 ? 0 : 1
    }
  }
}
</script>

<style>
  .red{
    background-color: red;
  }
  .orange{
    background-color: orange;
  }
  .yellow{
    background-color: yellow;
  }
  .green{
    background-color: green;
  }
  .cyan{
    background-color: cyan;
  }
  .blue{
    background-color: blue;
  }
  .purple{
    background-color: purple;
  }
  .gray{
    background-color: gray;
  }
  .pink{
    background-color: pink;
  }
  .black{
    background-color: black;
  }
  .white{
    background-color: white;
  }
  .brown{
    background-color: brown;
  }

  .inputCheckBox {
    width: 100%;
    max-height: 6rem;
    display: flex;
    flex-wrap: wrap;
    align-items: center;
  }
  .color-box {
    margin-left: 50%;
    transform: translate(-50%, 0);
    width: 15rem;
    display: flex;
  }
  .wrapper {
    margin: 0.125rem;
    width: 2rem;
    height: 2rem;
    max-height: 20%;
    max-width: 20%;
  }
  .inputScope{
    margin: 20px
  }
</style>
