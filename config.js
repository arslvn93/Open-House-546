const config = {
  "property": {
    "streetAddress": "2611 25 Street SW",
    "city": "Calgary",
    "cityStateZip": "Calgary, AB T3H 1N3",
    "heroSubtitle": "Huge 3650 sqft of developed living space! LEGAL Carriage Suite, 6 bedrooms, 5.5 baths, and a full Jennair appliance package (over $32,000 value). Register to receive the complete Home & Neighbourhood Info Package, virtual tour, floor plans, and comparables.",
    "backgroundImageUrl": "https://api.typeform.com/responses/files/e506a4793267cb83a78d09206bbb964a30d8e9474c18e1aa7066df77ae782083/GetMedia__5_.jfif",
    "listingUrl": "https://matrix.pillarnine.com/Matrix/Public/Portal.aspx?p=DE-274396382-302&k=4209874X4C2F&eml=YW15bGNhdWdobGluQGdtYWlsLmNvbQ==",
    "floorPlanUrl": "https://matrixmedia.pillarnine.com/mediaserver/GetMedia.ashx?Key=102029019&TableID=0&Type=3&Number=1&Size=0&NNF=1&RFN=floorplan_imperial_en+(2)+(1).pdf&tstmp=0625165052&exk=fcc948997f5ad413e9de512cc9b7059d",
    "virtualTourUrl": "https://youriguide.com/qxrz0_2611_25_st_sw_calgary_ab",
    "comparablesUrl": "https://matrix.pillarnine.com/DE.asp?ID=DE-274398471105&agt=1",
    "listingPrice": "$1,550,000",
    "beds": 6,
    "baths": 5.5,
    "homeType": "Detached home",
    "photos": [
      "https://api.typeform.com/responses/files/e506a4793267cb83a78d09206bbb964a30d8e9474c18e1aa7066df77ae782083/GetMedia__5_.jfif",
      "https://api.typeform.com/responses/files/a87a2cfdb4cfc636b2678d4cd747b66da14f7faec8e064249fcb3772ccd31abb/outside_picture.jfif"
    ],
    "propertyHighlights": [
      "3650 sqft of developed living space",
      "Close to downtown Calgary",
      "Full Jennair appliance package (valued over $32,000)",
      "LEGAL Carriage Suite"
    ],
    "neighborhoodDescription": "Richmond is a vibrant, family-friendly inner-city neighbourhood in southwest Calgary that offers the perfect blend of urban convenience and residential charm. Known for its walkability and proximity to Marda Loop, downtown, and major roadways like Crowchild Trail, Richmond is ideal for busy professionals, young families, and downsizers looking for lifestyle and location. The community is filled with beautifully designed infills, established homes, and green spaces like Richmond Green Park, along with quick access to tennis courts, golf courses, and river pathways. Plus, it's just minutes to trendy dining, cafes, boutique fitness, and top-rated schools."
  },
  "realtor": {
    "fullName": "Amy Caughlin",
    "title": "REALTOR®",
    "phone": "+1 587 439 1618",
    "email": "amy@caughlinrealestate.ca",
    "bio": "A former risk manager turned Realtor, proptech co-founder, podcast host, and passionate community advocate. I help busy professionals and families find homes that truly fit their lives, while working behind the scenes to make real estate better for everyone involved. With a background in risk management, I bring a strategic lens to every transaction, ensuring my clients make informed, confident decisions... My path hasn’t been linear — and I believe that’s where the magic lies. I’m here to challenge the status quo, build solutions that truly help people, and give back to the communities that raised me — especially organizations that uplift women, children, and families.",
    "photoUrl": "https://static.showit.co/400/C70VVDf3rNbAxlaUMkDQUw/264146/suemoodiephotography-calgarybrandphotography-amycaughlin-studiosession-34-edit.jpg",
    "social": {
      "facebook": "https://www.facebook.com/caughlinrealestate/",
      "instagram": "https://www.instagram.com/caughlin.realestate/",
      "website": "https://caughlinrealestate.ca/"
    }
  },
  "brokerage": {
    "name": "Greater Property Group",
    "logoUrl": "https://www.krisdennis.com/hosted/images/42/9cd6aa092d4140810a82e28adf556d/GPG---No-Tagline-Logo-White-.png",
    "address": "5940 Macleod Trl SW #500, Calgary, AB T2H 2G4"
  },
  "openHouse": {
    "eventDate": "2025-06-28",
    "secondEventDate": "2025-06-29",
    "bundleItems": [
      {
        "icon": "fas fa-link",
        "text": "Property Listing URL"
      },
      {
        "icon": "fas fa-ruler-combined",
        "text": "Floor Plan"
      },
      {
        "icon": "fas fa-image",
        "text": "Photos"
      },
      {
        "icon": "fas fa-chart-bar",
        "text": "Recent Neighborhood Sales"
      },
      {
        "icon": "fas fa-check-circle",
        "text": "On-Market Comparables"
      }
    ]
  },
  "meta": {
    "pageTitlePrefix": "🏡 Amy Caughlin Open House",
    "navBrandLogoText": "OPEN HOUSE",
    "privacyPolicyLink": "https://greaterpropertygroup.com/privacy-policy/"
  },
  "settings": {
    "adminWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouseupdate",
    "visitorWebhookUrl": "https://n8n.salesgenius.co/webhook/openhouse",
    "confettiColors": [
      "#6187a7",
      "#f0e9d6",
      "#ffffff",
      "#83a363",
      "#d9ac68"
    ]
  },
  "modalQuestions": [
    {
      "id": "agent_status",
      "questionText": "Are you currently exploring homes with a real estate agent?",
      "options": [
        {
          "value": "committed",
          "text": "Yes, I'm committed to an agent."
        },
        {
          "value": "not_committed",
          "text": "No, I'm not committed to an agent."
        },
        {
          "value": "gathering_info",
          "text": "Just gathering information at this stage."
        }
      ]
    },
    {
      "id": "interest_level",
      "questionText": "How interested are you in properties like this?",
      "options": [
        {
          "value": "very_interested",
          "text": "Very interested, actively looking."
        },
        {
          "value": "somewhat_interested",
          "text": "Somewhat interested, keeping options open."
        },
        {
          "value": "just_browsing",
          "text": "Just browsing for now."
        }
      ]
    },
    {
      "id": "neighborhood_engagement",
      "questionText": "How do you usually enjoy the neighborhood?",
      "options": [
        {
          "value": "resident_explorer",
          "text": "I live here and love exploring locally."
        },
        {
          "value": "considering_move",
          "text": "I'm considering moving to this area."
        },
        {
          "value": "just_visiting",
          "text": "Just visiting for the open house."
        }
      ]
    },
    {
      "id": "feature_attraction",
      "questionText": "What feature attracted you to this home?",
      "options": [
        {
          "value": "design_layout",
          "text": "The design and layout."
        },
        {
          "value": "location_neighborhood",
          "text": "The location and neighborhood."
        },
        {
          "value": "home_price",
          "text": "The price of the home."
        }
      ]
    }
  ],
  "deploymentInfo": {
    "repoId": "690f9705-0595-454a-9181-0886e65b4037",
    "repoName": "Open-House-546",
    "repoUrl": "https://github.com/arslvn93/Open-House-546",
    "siteId": null,
    "netlifyUrl": "https://services.leadconnectorhq.com/hooks/KxSrsX5ZH2ZttFjyt9hW/webhook-trigger/EWFVczQeMtLq5D4IVClg",
    "tag": "2611 25 Street SW - Open House"
  }
};