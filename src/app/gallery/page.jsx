import { getMetaInfo } from "@/utils/metaInfo";
import CompanyGallery from "./companyGallery";

export const metadata = getMetaInfo("Gallery");

export default function GalleryPage() {
  return <CompanyGallery />;
}
