import Head from "next/head";
import Script from "next/script";

interface MetaProps {
  pageTitle?: string;
  pageDescription?: string;
  pagePath?: string;
  pageImg?: any;
  pageImgWidth?: number;
  pageImgHeight?: number;
  defaultfavicon?: string;
}


const HMeta: React.FC<MetaProps> = ({
  pageTitle,
  pageDescription,
  pagePath,
  pageImg,
  pageImgWidth,
  pageImgHeight,
  defaultfavicon,
}) => {
  const basedUrl = "https://nknighta.me";

  const defaultPageImg = pageImg
    ? basedUrl + pageImg
    : "https://nknighta.me/images/og.png";
  const defaultTitle = "nknighta";
  const defaultDescription = "nknighta portfolio and blog";
  const title = pageTitle ? `${pageTitle} | ${defaultTitle}` : defaultTitle;
  const description = pageDescription ? pageDescription : defaultDescription;
  const url = `https://nknighta.me${pagePath == undefined ? "/" : pagePath}`;
  const imgWidth = pageImgWidth ? pageImgWidth : 1280;
  const imgHeight = pageImgHeight ? pageImgHeight : 640;
  const favicon = defaultfavicon ? defaultfavicon : "/favicon.ico";
  const img_alt = pageImg
    ? pageImg.replace(/.*\//, "").replace(/\.\w+$/, "")
    : "nknighta";
  //const imgx = require("/images/favicon.ico");
  return (
    <Head>
      <title>{title}</title>
      <meta name="google-site-verification" content="FadhJDiAEFAdginv7Ttd1S3Ord4FWPtK3dnlKRAKeJo" />
      <meta name="viewport" content="width=device-width, initial-scale=1.0" />
      <meta name="description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:title" content={title} />
      <meta property="og:site_name" content={title} />
      <meta property="og:description" content={description} />
      <meta property="og:type" content="website" />
      <meta property="og:image" content={`${defaultPageImg}`} />
      <meta property="og:image:width" content={String(imgWidth)} />
      <meta property="og:image:height" content={String(imgHeight)} />
      <meta property="og:image:alt" content={img_alt} />
      <meta property="og:locale" charSet="UTF-8" content="en_US" />
      <meta property="twitter:description" content="NknightA blog" />
      <meta name="twitter:image" content={`${defaultPageImg}`} />
      <meta name="twitter:card" content="summary_large_image" />
      <meta name="twitter:creator" content="@ama_dev_1" />
      <meta name="twitter:creator:id" content="ama_dev_1" />
      <meta name="twitter:description" content="Nknight AMAMIYA's Twittwe"/>
      <meta name="twitter:site" content="@ama_dev_1" />
      <meta name="twitter:title" content={title} />
      <link rel="icon" href={favicon} sizes="any" />
      <link rel="canonical" href={url} />
    </Head>
  );
};

export default HMeta;
