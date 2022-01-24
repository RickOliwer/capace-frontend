export const ContactPage =`
    contactIntro {
        heading
        text
        address {
        street
        zipCodeCity
        }
        phone
        mail
    }
    contactInfo {
        heading
        contacts {
        heading
        email
        phone
        info
        }
    }
    contactOpeningHours {
        heading
        contacts {
        heading
        time {
            day
            hours
        }
        info
        }
    }
    contactMap {
        heading
        excerpt
        text
        googleMap {
        latitude
        longitude
        }
    }
`