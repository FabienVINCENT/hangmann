import { describe, it, expect } from "vitest";

import { mount } from "@vue/test-utils";
import HangmanBoy from "@/components/hangman/HangmanBoy.vue";

describe("HangmanBoy", () => {
  for (let i = 0; i <= 6; i++) {
    it("renders on step " + i, () => {
      const wrapper = mount(HangmanBoy, { props: { step: i } });
      expect(wrapper.findAll("svg")).length(i + 1);
    });
  }

  it("renders on wrong step small", () => {
    const wrapper = mount(HangmanBoy, { props: { step: -1 } });
    expect(wrapper.findAll("svg")).length(1);
  });

  it("renders on wrong step big", () => {
    const wrapper = mount(HangmanBoy, { props: { step: 7 } });
    expect(wrapper.findAll("svg")).length(7);
  });
});
