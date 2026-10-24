const tapSoundk = document.getElementById("tapSoundk");
const k = document.querySelector(".k.drum");

const tapSoundw = document.getElementById("tapSoundw");
const w = document.querySelector(".w.drum");

const tapSounda = document.getElementById("tapSounda");
const a = document.querySelector(".a.drum");

const tapSounds = document.getElementById("tapSounds");
const s = document.querySelector(".s.drum");

const tapSoundd = document.getElementById("tapSoundd");
const d = document.querySelector(".d.drum");

const tapSoundj = document.getElementById("tapSoundj");
const j = document.querySelector(".j.drum");

const tapSoundl = document.getElementById("tapSoundl");
const l = document.querySelector(".l.drum");

k.addEventListener("click", function () {
    tapSoundk.currentTime = 0;
    tapSoundk.play().catch(function (error) {
        console.log("Sound could not play:", error);
      });
});

w.addEventListener("click", function () {
    tapSoundw.currentTime = 0;
    tapSoundw.play().catch(function (error) {
        console.log("Sound could not play:", error);
      });
});

a.addEventListener("click", function () {
    tapSounda.currentTime = 0;
    tapSounda.play().catch(function (error) {
        console.log("Sound could not play:", error);
      });
});

s.addEventListener("click", function () {
    tapSounds.currentTime = 0;
    tapSounds.play().catch(function (error) {
        console.log("Sound could not play:", error);
      });
});

d.addEventListener("click", function () {
    tapSoundd.currentTime = 0;
    tapSoundd.play().catch(function (error) {
        console.log("Sound could not play:", error);
      });
});

j.addEventListener("click", function () {
    tapSoundj.currentTime = 0;
    tapSoundj.play().catch(function (error) {
        console.log("Sound could not play:", error);
      });
});

l.addEventListener("click", function () {
    tapSoundl.currentTime = 0;
    tapSoundl.play().catch(function (error) {
        console.log("Sound could not play:", error);
      });
});