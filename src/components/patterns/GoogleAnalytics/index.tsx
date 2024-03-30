"use client";

interface GoogleAnalyticsProps {
  gaId: string;
}

const GoogleAnalytics = ({ gaId }: GoogleAnalyticsProps) => (
  <>
    <script
      async
      src={`https://www.googletagmanager.com/gtag/js?id=${gaId}`}
    ></script>
    <script
      dangerouslySetInnerHTML={{
        __html: `
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
      
            gtag('config', '${gaId}');
          `,
      }}
    ></script>
  </>
);

export default GoogleAnalytics;
