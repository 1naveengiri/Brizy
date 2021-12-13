import { getData, validateInputs, getFetchUrl } from "./utils";
import {
  ElementType,
  loginDisplay,
  handleSubmit,
  getErrorMessages,
  getElementType,
  addAlerts
} from "./utils.common";

const cloudHeaders = { "Content-Type": "application/json" };
const fetchHeaders = new Headers(cloudHeaders);

let isSubmitEnabled = true;

export default function($node: JQuery): void {
  const node: Element = $node.get(0);

  node.querySelectorAll(".brz-login").forEach(element => {
    loginDisplay(element);

    const errorMessages = getErrorMessages(element);

    const authorizedNode = element.querySelector(".brz-login__authorized");

    authorizedNode?.querySelector("span")?.addEventListener("click", () => {
      const fetchUrl = getFetchUrl(ElementType.authorized);
      const fetchHeaders = new Headers();

      handleSubmit(
        ElementType.authorized,
        fetchUrl,
        "",
        fetchHeaders,
        authorizedNode,
        element
      );
    });

    element
      .querySelectorAll<HTMLFormElement>(".brz-login-form")
      .forEach(form => {
        form.addEventListener("submit", e => {
          e.preventDefault();

          if (isSubmitEnabled) {
            const elementType = getElementType(element.getAttribute("type"));

            if (elementType) {
              const valid = validateInputs(elementType, form, errorMessages);

              const fetchUrl = getFetchUrl(elementType);

              if (valid.success) {
                const formData = getData(elementType, form);

                isSubmitEnabled = false;
                const submit = form.querySelector(".brz-btn");
                submit?.classList.add("brz-blocked");

                handleSubmit(
                  elementType,
                  fetchUrl,
                  formData,
                  fetchHeaders,
                  form,
                  element
                );

                isSubmitEnabled = true;
                submit?.classList.remove("brz-blocked");
              } else {
                addAlerts(form, valid.messages, "error");
              }
            }
          }
        });
      });
  });
}
