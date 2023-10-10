export interface Verified {
    status:               string;
    phone:                string;
    phone_valid:          string;
    phone_type:           boolean | null;
    phone_region:         string;
    country:              string;
    country_code:         string;
    country_prefix:       string;
    international_number: string;
    local_number:         string;
    e164:                 string;
    carrier:              string;
}