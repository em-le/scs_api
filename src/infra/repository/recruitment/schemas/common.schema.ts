import { Prop, Schema } from '@nestjs/mongoose';
import {
  Association,
  ContactInformation,
  GeoCoordinate,
  LanguageCompetency,
  PersonName,
  SovrenLocation,
  Telephone,
  WebAddress,
} from 'src/infra/textkernel/openapi/data-contracts';

@Schema()
export class AssociationImpl implements Association {
  @Prop({
    type: String,
    required: false,
  })
  Organization?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Role?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FoundInContext?: string | null;
}

@Schema()
export class LanguageCompetencyImpl implements LanguageCompetency {
  @Prop({
    type: String,
    required: false,
  })
  Language?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  LanguageCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FoundInContext?: string | null;
}

@Schema()
export class PersonNameImpl implements PersonName {
  @Prop({
    type: String,
    required: false,
  })
  FormattedName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Prefix?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  GivenName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Moniker?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  MiddleName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  FamilyName?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Suffix?: string | null;
}

@Schema()
export class TelephoneImpl implements Telephone {
  @Prop({
    type: String,
    required: false,
  })
  Raw?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  Normalized?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  InternationalCountryCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  AreaCityCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  SubscriberNumber?: string | null;
}

@Schema()
export class GeoCoordinateImpl implements GeoCoordinate {
  @Prop({
    type: Number,
    required: false,
  })
  Latitude?: number;

  @Prop({
    type: Number,
    required: false,
  })
  Longitude?: number;

  @Prop({
    type: String,
    required: false,
  })
  Source?: string | null;
}

@Schema()
export class SovrenLocationImpl implements SovrenLocation {
  @Prop({
    type: String,
    required: false,
  })
  CountryCode?: string | null;

  @Prop({
    type: String,
    required: false,
  })
  PostalCode?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  Regions?: string[] | null;

  @Prop({
    type: String,
    required: false,
  })
  Municipality?: string | null;

  @Prop({
    type: [String],
    required: false,
  })
  StreetAddressLines?: string[] | null;

  @Prop({
    type: GeoCoordinateImpl,
    required: false,
  })
  GeoCoordinates?: GeoCoordinate;
}

@Schema()
export class ContactInformationImpl implements ContactInformation {
  @Prop({
    type: PersonNameImpl,
    required: false,
  })
  CandidateName?: PersonName;

  @Prop({
    type: [TelephoneImpl],
    required: false,
  })
  Telephones?: Telephone[] | null;

  @Prop({
    type: [String],
    required: false,
  })
  EmailAddresses?: string[] | null;

  @Prop({
    type: SovrenLocationImpl,
    required: false,
  })
  Location?: SovrenLocation;

  WebAddresses?: WebAddress[] | null;
}
