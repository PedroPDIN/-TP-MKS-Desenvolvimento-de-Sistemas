import { render, screen } from "@testing-library/react";
import Footer from "@/components/Footer";

describe('Component Footer', () => {
  it('footer elements rendered successfully.', () => {
    render(<Footer />);

    const elementFooter = screen.getByTestId("element-footer")

    expect(elementFooter).toBeDefined();
    expect(elementFooter.tagName).toEqual("FOOTER");
    expect(elementFooter.innerHTML).toEqual("MKS sistemas © Todos os direitos reservados");
  })
})