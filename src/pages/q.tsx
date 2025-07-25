import Layout from "../layout/main";
import Link from "next/link";
import { useRouter } from "next/router";
import { useEffect } from "react";

export default function LinkPage() {
  const router = useRouter();
  useEffect(() => {
    router.push("https://qiita.com/amamiya_dev");
  }, []);
  return (
    <Layout>
      <div style={{ textAlign: "center", marginTop: "50px", height: "100vh" }}>
        <h1>Redirect to Qiita...</h1>
        <p>
          If you are not redirected automatically, please click the link below.
        </p>
        <Link
          href="https://qiita.com/amamiya_dev"
          style={{ color: "blue", textDecoration: "underline" }}
        >
          Go to VX
        </Link>
      </div>
    </Layout>
  );
}
