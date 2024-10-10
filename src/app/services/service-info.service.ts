import { Injectable } from '@angular/core';
import { ServiceInfoComponent } from '../components/service-info/service-info.component';

@Injectable({
  providedIn: 'root'
})
export class ServiceInfoService {

  protected interiorServices: ServiceInfoComponent[] = [
    {
      description: {
        packageName: "Basic Refresh",
        packageTier: "basic",
        features: [
          "Vacuum and dust interior",
          "Streak-free clean on windows and mirrors",
          "Wipe down door jambs"
        ]
      },
      estimate: {
        estimatedCost: 85,
        estimatedTime: "1.5 hours",
        packageTier: "basic",
        serviceType: "interior",
        
      }
    },
    {
      description: {
        packageName: "Choice Detail",
        packageSubtitle: "Choice Detail includes all Basic Refresh features, plus the following:",
        packageTier: "choice",
        features: [
          "Light shampoo on carpet and fabric upholstery",
          "Remove surface dirt and grime from leather upholstery",
          "Deep clean center console and dashboard"
        ]
      },
      estimate: {
        estimatedCost: 150,
        estimatedTime: "4 hours",
        packageTier: "choice",
        serviceType: "interior",
        
      }
    },
    {
      description: {
        packageName: "Premium Restoration",
        packageSubtitle: "Premium Restoration includes all Basic Refresh & Choice Detail features, plus the following:",
        packageTier: "premium",
        features: [
          "Deep clean carpets and floor mats",
          "Lift embedded grime from fabric and leather upholstery",
          "Thoroughly clean steering wheel, pedals, and gear selector",
          "Condition and restore all leather surfaces",
          "Dry-clean minor stains from headliner"
        ]
      },
      estimate: {
        estimatedCost: 275,
        estimatedTime: "7 hours",
        packageTier: "premium",
        serviceType: "interior",
        
      }
    }
  ];

  protected exteriorServices: ServiceInfoComponent[] = [
    {
      description: {
        packageName: "Basic Refresh",
        packageTier: "basic",
        features: [
          "Hand wash & dry using gentle microfiber cloths",
          "Streak-free clean on windows and mirrors",
          "Wipe down door jambs",
          "Clean and dress tires and wheels"
        ]
      },
      estimate: {
        estimatedCost: 95,
        estimatedTime: "2 hours",
        packageTier: "basic",
        serviceType: "exterior",
        
      }
    },
    {
      description: {
        packageName: "Choice Detail",
        packageSubtitle: "Choice Detail includes all Basic Refresh features, plus the following:",
        packageTier: "choice",
        features: [
          "Remove tar and bugs",
          "Clay bar paint to remove contaminants",
          "Polish & wax exterior paint"
        ]
      },
      estimate: {
        estimatedCost: 165,
        estimatedTime: "4 hours",
        packageTier: "choice",
        serviceType: "exterior",
        
      }
    },
    {
      description: {
        packageName: "Premium Restoration",
        packageSubtitle: "Premium Restoration includes all Basic Refresh & Choice Detail features, plus the following:",
        packageTier: "premium",
        features: [
          "Iron-decontaminate wheels and apply ceramic rim protection",
          "Restore exterior black plastic trim",
          "Remove debris build-up from around windshields, badges, and emblems",
          "Full headlight restoration"
        ]
      },
      estimate: {
        estimatedCost: 305,
        estimatedTime: "8 hours",
        packageTier: "premium",
        serviceType: "exterior",
        
      }
    }
  ];

  getInteriorServices(): ServiceInfoComponent[] {
    return this.interiorServices;
  }

  getExteriorServices(): ServiceInfoComponent[] {
    return this.exteriorServices;
  }
}
