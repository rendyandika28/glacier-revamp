import PiCloseCircleSolid16 from "@privyid/persona-icon/vue/close-circle-solid/16.vue";
import PiStopwatch16 from "@privyid/persona-icon/vue/stopwatch/16.vue";
import PiCheckmarkCircleSolid16 from "@privyid/persona-icon/vue/checkmark-circle-solid/16.vue";
import PiTime16 from "@privyid/persona-icon/vue/time/16.vue";

enum DocumentType {
  ERROR = "error",
  SUCCESS = "success",
  WARNING = "warning",
}

// ============================================================================
// STATUS INFORMATION
// ============================================================================
interface StatusInformation {
  title: string;
  description: string;
  icon: any;
  type: DocumentType;
}
interface DocumentStatusInformation {
  type: string;
  items: StatusInformation[];
}
export const statusInformations = markRaw<DocumentStatusInformation[]>([
  {
    type: "error",
    items: [
      {
        title: "Retracted",
        description: "Document owner has retracted the document sent to you",
        icon: PiCloseCircleSolid16,
        type: DocumentType.ERROR,
      },
      {
        title: "Rejected",
        description: "Recipient rejected to sign for specific reasons",
        icon: PiCloseCircleSolid16,
        type: DocumentType.ERROR,
      },
      {
        title: "Blocked",
        description: "Document is blocked due to authentication failure",
        icon: PiCloseCircleSolid16,
        type: DocumentType.ERROR,
      },
      {
        title: "Expired",
        description:
          "Document is no longer valid as it has exceeded the deadline",
        icon: PiStopwatch16,
        type: DocumentType.ERROR,
      },
    ],
  },
  {
    type: "success",
    items: [
      {
        title: "Approved",
        description: "Document has been approved and signed",
        icon: PiCheckmarkCircleSolid16,
        type: DocumentType.SUCCESS,
      },
      {
        title: "Completed",
        description: "The document has been signed and processing is completed",
        icon: PiCheckmarkCircleSolid16,
        type: DocumentType.SUCCESS,
      },
    ],
  },
  {
    type: "warning",
    items: [
      {
        title: "Waiting for signature",
        description:
          "The document is waiting for signature from the other recipient",
        icon: PiStopwatch16,
        type: DocumentType.WARNING,
      },
      {
        title: "Waiting for registration",
        description: "You need to register first in order to sign",
        icon: PiTime16,
        type: DocumentType.WARNING,
      },
      {
        title: "Waiting for verification",
        description:
          "Your personal information is being verified before you can sign",
        icon: PiTime16,
        type: DocumentType.WARNING,
      },
      {
        title: "Signing process",
        description:
          "Your document has been signed and is still processed by the system",
        icon: PiTime16,
        type: DocumentType.WARNING,
      },
    ],
  },
]);
// ============================================================================

// ============================================================================
// TEMPORARY INFORMATION
// ============================================================================
export interface Document {
  title: string;
  extension: string;
  status_doc: string;
  type: DocumentType;
  icon: any;
}
export const unopenedDocuments = markRaw<Document[]>([
  {
    title: "Business Plan Report",
    status_doc: "Expired",
    extension: ".pdf",
    type: DocumentType.ERROR,
    icon: PiCloseCircleSolid16,
  },
  {
    title: "Sales Document Report",
    status_doc: "Rejected",
    extension: ".pdf",
    type: DocumentType.ERROR,
    icon: PiCloseCircleSolid16,
  },
  {
    title: "Financial Statement",
    status_doc: "Waiting for signature",
    extension: ".pdf",
    type: DocumentType.WARNING,
    icon: PiCloseCircleSolid16,
  },
  {
    title: "Market Research Report",
    status_doc: "Waiting for verification",
    extension: ".pdf",
    type: DocumentType.WARNING,
    icon: PiCloseCircleSolid16,
  },
]);

enum RecipientType {
  // Default => for loggedin user
  DEFAULT = "you",
  REVIEWER = "reviewer",
  SIGNER = "signer",
}

interface Recipient {
  avatar: string;
  fullName: string;
  status: string;
}

export interface Recipients {
  type: RecipientType;
  recipients: Recipient[];
}

export const recipients = markRaw<Recipients[]>([
  {
    type: RecipientType.DEFAULT,
    recipients: [
      {
        fullName: "Erling Braut",
        avatar: "",
        status: "Retracted",
      },
    ],
  },
  {
    type: RecipientType.REVIEWER,
    recipients: [
      {
        fullName: "Manuel Pallegrini",
        avatar: "",
        status: "Waiting for registration",
      },
      {
        fullName: "Oza Rangkuti",
        avatar: "",
        status: "Rejected",
      },
    ],
  },
  {
    type: RecipientType.SIGNER,
    recipients: [
      {
        fullName: "Ricardo Kaka",
        avatar: "",
        status: "Waiting for registration",
      },
    ],
  },
]);
// ============================================================================
