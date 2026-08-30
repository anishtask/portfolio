/* =========================================================================
   SITE CONFIG — this is the only file you need to edit for day-to-day updates.
   Swap videos, add projects, or change contact settings here — the page
   rebuilds itself from this data automatically. No HTML/CSS editing needed.
   ========================================================================= */

const SITE_CONFIG = {

  /* ---------------------------------------------------------------------
     HERO MEDIA
     The panel on the right of your headline (top of the site).
     Shows a short reel/demo of your work.

     While you don't have a real video yet, leave type: "placeholder" —
     it renders a clean animated mock-up frame instead of a broken video.

     WHEN YOU HAVE A VIDEO FILE:
       1. Upload the file to this same repo, right next to index.html
          (e.g. hero-reel.mp4). Keep media files at the root, not inside
          a subfolder — GitHub's web upload can silently drop folders,
          which is what happened the first time around.
       2. Change this block to:
            heroMedia: {
              type: "video",
              src: "hero-reel.mp4",
              poster: "hero-poster.jpg" // optional preview image
            }

     IF YOU'D RATHER EMBED A YOUTUBE/VIMEO VIDEO INSTEAD OF A FILE:
            heroMedia: { type: "youtube", id: "YOUR_YOUTUBE_VIDEO_ID" }
     --------------------------------------------------------------------- */
  heroMedia: {
    type: "placeholder",
    label: "Work Reel — Coming Soon"
  },

  /* ---------------------------------------------------------------------
     ABOUT PHOTO
     Leave as "placeholder" for the initials avatar, or switch to:
       aboutMedia: { type: "image", src: "anish.jpg" }
     --------------------------------------------------------------------- */
  aboutMedia: {
    type: "placeholder",
    initials: "AB"
  },

  /* ---------------------------------------------------------------------
     FEATURED WORK / PROJECTS
     Each project supports its own media slot — same rules as heroMedia:
       media: { type: "placeholder", label: "..." }
       media: { type: "video", src: "project-1.mp4", poster: "..." }
       media: { type: "youtube", id: "..." }
       media: { type: "image", src: "project-1.jpg" }

     "link" is where "View Case Study" / "View Project" points to.
     Leave it as "#" until you have a real case-study page or client
     link — clicking it will just show a friendly "coming soon" toast
     instead of a dead link.
     --------------------------------------------------------------------- */
  projects: [
    {
      title: "Luxury Real Estate Website",
      category: "Website Design & Development",
      description: "A modern, responsive real estate website designed to present properties professionally and make it easier for potential buyers to explore listings and take action.",
      tags: ["WordPress", "UI Design", "Responsive Development", "Lead Generation"],
      cta: "View Case Study",
      link: "#",
      media: { type: "placeholder", label: "Live View — Coming Soon" }
    },
    {
      title: "Coaching Business Website",
      category: "Website Design & Development",
      description: "A professional coaching website focused on building trust, clearly communicating the offer, and guiding visitors toward taking the next step.",
      tags: ["Web Design", "Landing Pages", "Responsive Design", "Conversion Strategy"],
      cta: "View Project",
      link: "#",
      media: { type: "placeholder", label: "Live View — Coming Soon" }
    },
    {
      title: "Small Business Website",
      category: "Website Design & Development",
      description: "A clean business website designed to establish credibility online and make it easy for potential customers to understand the services and get in touch.",
      tags: [],
      cta: "View Project",
      link: "#",
      media: { type: "placeholder", label: "Live View — Coming Soon" }
    },
    {
      title: "Email Marketing & Automation",
      category: "Email Marketing",
      description: "Designed email campaigns and automation workflows to help businesses communicate with leads and customers consistently.",
      tags: ["Mailchimp", "Brevo", "Klaviyo", "MailerLite"],
      cta: "View Email Projects",
      link: "#",
      media: { type: "placeholder", label: "Live View — Coming Soon" }
    },
    {
      title: "Digital Advertising Projects",
      category: "Google & Meta Advertising",
      description: "Campaign and marketing projects focused on generating traffic, leads, and measurable business results.",
      tags: ["Google Ads", "Meta Ads", "Meta Pixel", "Conversion Tracking"],
      cta: "View Marketing Projects",
      link: "#",
      media: { type: "placeholder", label: "Live View — Coming Soon" }
    }
  ],

  /* ---------------------------------------------------------------------
     CONTACT
     email / phone — leave blank ("") to hide that row entirely.

     formEndpoint — leave blank to have the form open the visitor's email
     app with everything pre-filled (works with zero backend, fine for
     GitHub Pages). If you'd rather receive submissions straight to an
     inbox or spreadsheet, create a free form at https://formspree.io (or
     similar), paste the endpoint URL below, and the form will POST there
     instead — no code changes needed.
     --------------------------------------------------------------------- */
  contact: {
    email: "",
    phone: "",
    formEndpoint: ""
  }

};
