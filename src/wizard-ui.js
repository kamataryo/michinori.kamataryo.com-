// copy to clipboard
document.getElementById("clip").addEventListener("click", () => {
  var url = document.getElementById("url");
  url.select();
  url.setSelectionRange(0, 99999);
  document.execCommand("copy");
  url.setSelectionRange(0, 0);
  toggleWizard("copy", false, 0);
  toggleWizard("copied", true, 0);
  toggleWizard("copied", false, 5000);
});

const wizardForTrail = document.getElementById("wizard-trail");
const wizardForCopy = document.getElementById("wizard-copy");
const wizardForCopied = document.getElementById("wizard-copied");

/**
 *
 * @param {'trail' | 'copy' |'copied'} wizardId
 * @param {boolean} open
 * @param {number} delay
 */
export const toggleWizard = (wizardId, open, delay = 0) => {
  const nextDisplay = open ? "block" : "none";
  let wizard = null;
  switch (wizardId) {
    case "trail":
      wizard = wizardForTrail;
      break;
    case "copy":
      wizard = wizardForCopy;
      break;
    case "copied":
      wizard = wizardForCopied;
      break;
    default:
      break;
  }
  if (wizard) {
    setTimeout(() => (wizard.style.display = nextDisplay), delay);
  }
};
